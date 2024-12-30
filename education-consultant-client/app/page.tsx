import News from "@/components/pages/home/News";
import OurServices from "@/components/pages/home/OurServices";
import UniversitySlide from "@/components/pages/home/UniversitySlide";
import UpcomingUniversityEvents from "@/components/pages/home/UpcomingUniversityEvents";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      {/* Hero Section  */}
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto flex px-5 my-5 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-10 font-medium text-gray-900 dark:text-white">
              We Help to <span className=" text-primary">Build </span>
              <br className="hidden lg:inline-block" />
              Your Dream
            </h1>
            <p className="mb-10 leading-relaxed dark:text-gray-300">
              We are always availed to consult on taking your higher education
              to the next level so you can stay competitive in the global world.
              We welcome the opportunity to work with you &ldquo;today&ldquo;
              for &ldquo;tomorrow&lsquo;s&ldquo; better career solutions.
            </p>
            <div className="flex justify-center">
              <Link
                href={"/contact"}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Apply Online -&gt;
              </Link>
            </div>
            <div className=" absolute bottom-0">
              <div className="inline-flex gap-10">
                <Link
                  href="https://facebook.com/swdrana"
                  className="  bg-white hover:bg-primary transation duration-300 h-8 w-8 flex items-center justify-center rounded-full"
                  target="_blank"
                >
                  <FaFacebookF color="blue" size={24} />
                </Link>
                <Link
                  href="https://instagram.com/swdrana"
                  className="  bg-white hover:bg-primary transation duration-300 h-8 w-8 flex items-center text-orange-700 justify-center rounded-full"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="https://youtube.com/swdrana"
                  className="  bg-white hover:bg-primary transation duration-300 h-8 w-8 flex items-center text-red-600 justify-center rounded-full"
                  target="_blank"
                >
                  <FaYoutube size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded z-10"
              alt="hero"
              src="/img/graduation-photo.png"
              quality={100}
              width={720}
              height={600}
            />
          </div>

          <Image
            className=" rounded absolute bottom-0 -right-[0%] lg:-right-[10%] z-[-1] overflow-hidden"
            alt="hero"
            src="/img/bg-oval.svg"
            width={720}
            height={600}
          />
        </div>
      </section>
      {/* Top University Section  */}
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto flex px-5 my-5 md:flex-row flex-col items-center "></div>
      </section>
      <UniversitySlide />
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-10 my-32">
          <OurServices />
        </div>
      </div>
      <div className=" bg-gray-50 dark:bg-transparent">
        <div className="container mx-auto">
          <div className=" flex flex-col gap-10 py-20 ">
            <News />
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="container mx-auto">
          <div className=" flex flex-col gap-10 py-20 ">
            <UpcomingUniversityEvents />
          </div>
        </div>
      </div>
    </>
  );
}
