import { getBlogs } from "@/actions/blog";
import { TBlog } from "@/models/Blog";
import blogBg from "@/public/img/static/blog-bg.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Breadcrumb: React.FC = async () => {
  const blogs= await getBlogs();
  return (
    <main className=" flex  flex-col items-center gap-10">
      <section
        className=" w-full bg-cover bg-center bg-gradient-to-r from-[#d7fdf186]  to-[#af91f490]"
        //   style={{ backgroundImage: `url(${breadcrumbBg.src})` }}
      >
        <div className="container mx-auto">
          <div
            className="flex flex-wrap bg-no-repeat py-44 bg-right"
            style={{ backgroundImage: `url(${blogBg.src})` }}
          >
            <div className="w-full  p-12">
              <div className="text-center ">
                <h2 className="font-semibold text-2xl md:text-4xl glass inline-block p-2 rounded-lg border-0 outline-0">
                  Blogs
                </h2>
                <ul className="mt-2 text-sm ">
                  <li className="inline">
                    <Link
                      href="/"
                      className=" text-base-100 md:text-primary hover:text-inherit"
                    >
                      Home
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                  <li className="inline">
                    <Link
                      href="/blogs"
                      className="text-base-100 md:text-primary  hover:text-inherit"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf__blog_page mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h5 className="text-lg text-gray-600">LATEST NEWS & BLOG</h5>
            <h2 className="text-3xl font-bold">Our latest Blog And News</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                href={`blogs/${blog.title}`}
                key={blog._id}
                className="bg-base-200 shadow-lg rounded-lg overflow-h_idden border border-base-300 hover:border-primary transition-all duration-500 ease-in-out group block overflow-hidden group"
              >
                <Image
                  height={100}
                  width={100}
                  src={blog.image}
                  alt="blog"
                  className="w-full h-60 object-cover group-hover:scale-110 transition-all ease-in-out duration-300"
                />
                <div className="p-6">
                  <span
                    className={`badge badge-primary group:badge-outline text-xs`}
                  >
                    {new Date(blog?.updatedAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-primary">{blog?.title}</h3>
                  <p className=" mt-2">{blog?.shortDescription}</p>
                  <button
                    className=" flex items-center justify-center gap-1 group-hover:gap-4 trasi duration-300 ease-in-out mt-3 group-hover:text-primary font-medium"
                  >
                    Read More <FaArrowRight/>
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="join pb-10">
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          defaultChecked
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="2"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="3"
        />
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="4"
        />
      </div>
    </main>
  );
};

export default Breadcrumb;
