This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

তুমি যদি **Next.js এর ফাইল সিস্টেমে ইমেজ সংরক্ষণ করে API দিয়ে serve** করতে চাও এবং **Vercel ব্যবহার না করে নিজের VPS (Ubuntu) এ হোস্ট করো**, তাহলে নিচের ধাপগুলো অনুসরণ করো।  

---

## ✅ **ধাপে ধাপে সমাধান**  

### **1️⃣ আপলোড করা ফাইল `storage/uploads/` ফোল্ডারে সংরক্ষণ**  
**👉 আপলোড করা ফাইল `/public/uploads` ফোল্ডারে না রেখে `/storage/uploads` ফোল্ডারে রাখবে, কারণ Next.js বিল্ড হলে `public` ফোল্ডারের কন্টেন্ট রিসেট হয়ে যায়।**  

#### **📌 Next.js API Route (app/api/team/upload/route.ts)**
```ts
import { NextResponse } from 'next/server';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import TeamMember from '@/models/TeamMember'; // MongoDB Model

const unlinkAsync = promisify(fs.unlink);

// ✅ Ensure storage/uploads directory exists
const uploadDir = path.join(process.cwd(), 'storage/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Required for multer
  },
};

export async function POST(req: Request) {
  return new Promise((resolve, reject) => {
    upload.single('photo')(req as any, {} as any, async (err: any) => {
      if (err) {
        return reject(NextResponse.json({ error: 'File upload failed.' }, { status: 500 }));
      }

      try {
        const formData = await req.formData();
        const id = formData.get('id') as string;
        const name = formData.get('name') as string;
        const position = formData.get('position') as string;
        const description = formData.get('description') as string;
        const facebook = (formData.get('facebook') as string) || '';
        const linkedin = (formData.get('linkedin') as string) || '';
        const twitter = (formData.get('twitter') as string) || '';
        const instagram = (formData.get('instagram') as string) || '';
        let photoUrl = '';

        if (req.file) {
          photoUrl = `/api/uploads/${req.file.filename}`; // ✅ Serve via API

          // ✅ Delete Old Photo (Optional)
          const oldMember = await TeamMember.findById(id);
          if (oldMember?.photoUrl) {
            const oldFilePath = path.join(process.cwd(), 'storage/uploads', oldMember.photoUrl.split('/').pop()!);
            try {
              await unlinkAsync(oldFilePath);
            } catch (err) {
              console.warn("Old photo delete failed:", err);
            }
          }
        }

        // ✅ Update Database
        await TeamMember.findByIdAndUpdate(id, {
          name,
          position,
          description,
          facebook,
          linkedin,
          twitter,
          instagram,
          ...(photoUrl && { photoUrl }),
        });

        resolve(NextResponse.json({ success: true, message: 'Team member updated successfully!', photoUrl }, { status: 200 }));
      } catch (error) {
        console.error("Error updating team member:", error);
        reject(NextResponse.json({ error: 'Error updating team member' }, { status: 500 }));
      }
    });
  });
}
```

---

### **2️⃣ আপলোড করা ফাইল সার্ভ করার জন্য API তৈরি করা**  
তুমি `/api/uploads/:filename` রুট দিয়ে ইমেজ সার্ভ করতে পারো।

#### **📌 Next.js API Route (app/api/uploads/[filename]/route.ts)**
```ts
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(req: Request, { params }: { params: { filename: string } }) {
  const filePath = path.join(process.cwd(), "storage/uploads", params.filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const fileStream = fs.createReadStream(filePath);
  return new Response(fileStream, {
    headers: {
      "Content-Type": "image/jpeg", // Change this based on file type
    },
  });
}
```

---

### **3️⃣ Frontend এ Image Fetch করা**
এখন তুমি Frontend থেকে `/api/uploads/filename.jpg` URL ব্যবহার করে ইমেজ লোড করতে পারবে।

```tsx
<img src={`/api/uploads/${photoUrl.split("/").pop()}`} alt="Team Member" />
```

---

## ✅ **শেষ কথাঃ এই সমাধান কেন ভালো?**  
- **✅ Next.js এর API দিয়ে ইমেজ সার্ভ করা যাবে**  
- **✅ Vercel এর পরিবর্তে নিজের VPS এ ব্যাকএন্ড হোস্ট করা সম্ভব**  
- **✅ `public/uploads` ব্যবহার না করায় ফাইল হারানোর ভয় নেই**  
- **✅ Multer দিয়ে সহজে ফাইল আপলোড এবং ম্যানেজ করা যাবে**  
- **✅ API ব্যবহার করে ইমেজ সুরক্ষিত রাখা যাবে (Authentication দরকার হলে পরে অ্যাড করতে পারো)**  

---
**এখন তুমি তোমার VPS (Ubuntu) তে এটি রান করো এবং টেস্ট করে দেখো। 🚀**