import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      {/* 
        সাইটের ক্যারেক্টার এনকোডিং:
        - `UTF-8` এনকোডিং ব্যবহার করা হয় যাতে সকল ভাষার (বিশেষ করে বাংলা, ইংরেজি) অক্ষর ঠিকভাবে প্রদর্শিত হয়।
      */}
      <meta charSet="UTF-8" />

      {/* 
        রেসপন্সিভ ডিজাইনের জন্য:
        - `width=device-width`: ডিভাইসের প্রস্থ অনুযায়ী কন্টেন্ট ঠিক করবে।
        - `initial-scale=1`: স্কেলের প্রাথমিক মান নির্ধারণ করে।
        - `maximum-scale=1`: সর্বোচ্চ জুম সীমিত রাখবে।
        - `user-scalable=no`: ব্যবহারকারীকে জুম বন্ধ করে দেয়। (যদি প্রয়োজন না থাকে, `yes` রাখা যেতে পারে।)
      */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      {/* 
        সাইটের সংক্ষিপ্ত বর্ণনা:
        - সার্চ ইঞ্জিনে এবং সোশ্যাল শেয়ারে প্রদর্শিত হবে।
        - এটি **অত্যন্ত গুরুত্বপূর্ণ** কারণ এটি ক্লিক-থ্রু রেট বাড়াতে সাহায্য করে।
      */}
      <meta
        name="description"
        content="বাংলাদেশের শীর্ষ ই-কমার্স প্ল্যাটফর্ম। সেরা দামে অনলাইনে পণ্য কিনুন এবং বিক্রি করুন।"
      />

      {/* 
        কীওয়ার্ডস:
        - সার্চ ইঞ্জিনের জন্য প্রাসঙ্গিক টার্ম যোগ করে। (গুগল এটি সরাসরি ব্যবহার করে না, তবে কিছু সার্চ ইঞ্জিন করে।)
        - আপনার প্রোডাক্ট বা সার্ভিস অনুযায়ী কাস্টমাইজ করুন।
      */}
      <meta
        name="keywords"
        content="e-commerce, online shopping, buy products, sell products, বাংলাদেশ ই-কমার্স, সেরা দাম, অনলাইন মার্কেটপ্লেস"
      />

      {/* 
        সার্চ ইঞ্জিন নির্দেশিকা:
        - `index`: পেজটি ইনডেক্স করার অনুমতি দেয়।
        - `follow`: এই পেজের লিঙ্ক ফলো করার অনুমতি দেয়।
        - যদি কিছু পেজ লুকিয়ে রাখতে চান (যেমন অ্যাডমিন পেজ), সেখানে `noindex` বা `nofollow` ব্যবহার করবেন।
      */}
      <meta name="robots" content="index, follow" />

      {/* 
        ওপেন গ্রাফ ট্যাগস:
        - সোশ্যাল মিডিয়া শেয়ারিংয়ের জন্য ব্যবহৃত হয়।
        - Facebook, Twitter, LinkedIn ইত্যাদিতে পেজটি কেমন দেখাবে তা নির্ধারণ করে।
      */}
      <meta property="og:title" content="বাংলাদেশের শীর্ষ ই-কমার্স প্ল্যাটফর্ম" />
      <meta
        property="og:description"
        content="সেরা দামে অনলাইনে পণ্য কিনুন এবং বিক্রি করুন। আমাদের প্ল্যাটফর্মে একটি বৃহৎ পণ্য সমাহার।"
      />
      <meta property="og:image" content="https://yourwebsite.com/path/to/image.jpg" />
      <meta property="og:url" content="https://yourwebsite.com" />
      <meta property="og:type" content="website" />

      {/* 
        টুইটার কার্ড:
        - টুইটারে কিভাবে লিঙ্কটি শেয়ার হবে তা নির্ধারণ করে।
      */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="বাংলাদেশের শীর্ষ ই-কমার্স প্ল্যাটফর্ম" />
      <meta name="twitter:description" content="সেরা দামে পণ্য কিনুন এবং বিক্রি করুন।" />
      <meta name="twitter:image" content="https://yourwebsite.com/path/to/image.jpg" />

      {/* 
        পেজ টাইটেল:
        - ব্রাউজারের ট্যাবে এবং সার্চ রেজাল্টে দেখায়।
        - সার্চ র‍্যাংকিংয়ে এটি খুব গুরুত্বপূর্ণ।
      */}
      <title>বাংলাদেশের শীর্ষ ই-কমার্স প্ল্যাটফর্ম</title>

      {/* 
        স্ট্রাকচার্ড ডেটা (JSON-LD):
        - সার্চ ইঞ্জিনের জন্য পেজের তথ্য কাঠামো পরিষ্কারভাবে নির্ধারণ করে।
        - পণ্য বা সার্ভিস নিয়ে বিস্তারিত তথ্য যোগ করতে পারেন।
      */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "বাংলাদেশের শীর্ষ ই-কমার্স প্ল্যাটফর্ম",
          description:
            "সেরা দামে অনলাইনে পণ্য কিনুন এবং বিক্রি করুন। আমাদের প্ল্যাটফর্মে একটি বৃহৎ পণ্য সমাহার।",
          url: "https://yourwebsite.com",
          publisher: {
            "@type": "Organization",
            name: "Your Company Name",
            logo: {
              "@type": "ImageObject",
              url: "https://yourwebsite.com/logo.jpg",
            },
          },
        })}
      </script>
    </Head>
  );
}
