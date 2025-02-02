'use client';
import Image from 'next/image';
import { FaCalendarAlt, FaUserEdit } from 'react-icons/fa';

const post =  {
    id: "mastering-javascript",
    title: "Mastering JavaScript: Tips and Tricks for Web Developers",
    author: "Jane Smith",
    date: "26 Sep 2023",
    content: "Take your web development skills to the next level with our comprehensive guide to mastering JavaScript...",
    image: "https://eduor.vercel.app/images/blog_4.jpg",
    comments: [
      { name: "Rubel Merat", text: "Great article!", date: "31 Jan 2023 at 03:16 PM" },
      { name: "Korat Berata", text: "Very helpful!", date: "31 Jan 2023 at 03:16 PM" },
      { name: "Norat Berata", text: "Loved the tips!", date: "31 Jan 2023 at 03:16 PM" }
    ]
  }


export default function BlogDetails() {
    const recentPosts = [
        {
          date: "30 Jan 2023",
          title: "Learn with these award-winning best blog collage courses",
          image: "https://eduor.vercel.app/images/blog_4.jpg",
          link: "/blog/learn-with-these-award-winning-best-blog-collage-courses",
        },
        {
          date: "26 Sep 2023",
          title: "Mastering JavaScript: Tips and Tricks for Web Developers",
          image: "https://eduor.vercel.app/images/blog_4.jpg",
          link: "/blog/mastering-javascript-tips-and-tricks-for-web-developers",
        },
        {
          date: "18 Aug 2023",
          title: "Top 10 Must-Visit Destinations for Adventure Seekers",
          image: "https://eduor.vercel.app/images/blog_4.jpg",
          link: "/blog/top-10-must-visit-destinations-for-adventure-seekers",
        },
      ];
      
      const categories = [
        { name: "Business", count: 8 },
        { name: "Maintenance", count: 14 },
        { name: "Professional", count: 20 },
        { name: "Technology", count: 29 },
        { name: "Single-Business", count: 32 },
        { name: "Innovation", count: 22 },
      ];
      
      const tags = ["design", "service", "top", "help", "new", "best", "UI/UX", "sound"];

//   useEffect(() => {
//     if (id) {
//       const foundPost = blogData.find(blog => blog.id === id);
//       setPost(foundPost);
//     }
//   }, [id]);


  return (
    <main className='container mx-auto flex flex-col lg:flex-row'>

    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Image src={post.image} alt="Blog Image" width={800} height={400} className="rounded-lg w-full" />
        <div className="mt-4">
          <div className="flex items-center space-x-4 text-gray-600">
            <p className="flex items-center"><FaUserEdit className="mr-2" /> {post.author}</p>
            <p className="flex items-center"><FaCalendarAlt className="mr-2" /> {post.date}</p>
          </div>
          <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
          <p className="mt-4 text-gray-700">{post.content}</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Comments ({post.comments.length})</h3>
        {post.comments.map((comment, index) => (
          <div key={index} className="mt-4 border-t pt-4">
            <p className="font-bold">{comment.name}</p>
            <p className="text-gray-600">{comment.text}</p>
            <p className="text-sm text-gray-400">{comment.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Leave a Comment</h3>
        <form className="mt-4">
          <input type="text" placeholder="Name" className="w-full p-2 border rounded-md" />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mt-4" />
          <textarea placeholder="Comment..." rows={5} className="w-full p-2 border rounded-md mt-4"></textarea>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
     <aside className="w-full max-w-sm p-4 bg-base-100 shadow-lg rounded-xl sticky top-4">
     {/* Search Bar */}
     <div className="mb-6">
       <input type="text" placeholder="Search..." className="input input-bordered w-full" />
     </div>

     {/* Online Certificates */}
     <div className="mb-6 p-4 bg-primary text-white rounded-xl flex flex-col items-center">
       <span className="text-2xl mb-2">🔗</span>
       <h3 className="text-lg font-bold">Online Certificates</h3>
       <p className="text-sm text-center mt-2">We can provide you with a reliable handyan in London.</p>
       <a href="#" className="mt-2 text-white text-lg">→</a>
     </div>

     {/* Recent Posts */}
     <div className="mb-6">
       <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
       <ul>
         {recentPosts.map((post, index) => (
           <li key={index} className="flex items-center gap-4 mb-4">
             <Image src={post.image} alt={post.title} width={80} height={80} className="rounded-lg" />
             <div>
               <p className="text-sm text-gray-500">📅 {post.date}</p>
               <a href={post.link} className="text-md font-medium hover:text-primary">{post.title}</a>
             </div>
           </li>
         ))}
       </ul>
     </div>

     {/* Categories */}
     <div className="mb-6">
       <h3 className="text-lg font-bold mb-4">Categories</h3>
       <ul>
         {categories.map((cat, index) => (
           <li key={index} className="flex justify-between py-2 border-b">
             <a href="#" className="hover:text-primary">{cat.name}</a>
             <span>({cat.count})</span>
           </li>
         ))}
       </ul>
     </div>

     {/* Tags */}
     <div className="mb-6">
       <h3 className="text-lg font-bold mb-4">Tags</h3>
       <div className="flex flex-wrap gap-2">
         {tags.map((tag, index) => (
           <a key={index} href="#" className="badge badge-primary p-2">{tag}</a>
         ))}
       </div>
     </div>

     {/* Apply Now */}
     <div className="relative">
       <Image src="https://eduor.vercel.app/images/blog_4.jpg" alt="apply" width={400} height={250} className="rounded-lg" />
       <a href="#" className="btn btn-primary mt-4 w-full">Apply Now</a>
     </div>
   </aside>
    </main>
  );
}
