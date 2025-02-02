import React from 'react';
import breadcrumbBg from '@/public/img/static/breadcrumb_bg.jpg';
import blogBg from '@/public/img/static/blog-bg.png';
import Link from 'next/link';

const Breadcrumb: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center bg-gradient-to-r from-[#d7fdf186]  to-[#af91f490]"
    //   style={{ backgroundImage: `url(${breadcrumbBg.src})` }}
    >
      <div className="container mx-auto">
        <div
          className="flex flex-wrap bg-no-repeat py-44 bg-right"
          style={{ backgroundImage: `url(${blogBg.src})` }}
        >
          <div className="w-full  p-12">
            <div className="text-center ">
              <h2 className="font-semibold text-2xl md:text-4xl glass inline-block p-2 rounded-lg border-0 outline-0">Blogs</h2>
              <ul className="mt-2 text-sm ">
                <li className="inline">
                  <Link href="/" className=" text-base-100 md:text-primary hover:text-inherit">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="inline">
                <Link href="/blogs" className="text-base-100 md:text-primary  hover:text-inherit">Blogs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
