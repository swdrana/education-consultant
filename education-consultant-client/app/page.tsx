import Gallary from "@/components/pages/home/Gallary";
import News from "@/components/pages/home/News";
import OurServices from "@/components/pages/home/OurServices";
import Reviews from "@/components/pages/home/Reviews";
import SocailLink from "@/components/pages/home/SocailLink";
import Team from "@/components/pages/home/Team";
import UniversitySlide from "@/components/pages/home/UniversitySlide";
import UpcomingUniversityEvents from "@/components/pages/home/UpcomingUniversityEvents";
import Videos from "@/components/pages/home/Videos";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import TeamServerSide from "@/components/pages/home/TeamServerSide";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      {/* Hero Section */}

      <section className="">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center  relative overflow-visible lg:overflow-hidden">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-5xl text-4xl font-bold">
              We Help to <span className=" text-primary">Build </span>
              <br className="md:hidden lg:inline-block" />
              Your Dream
            </h1>
            <p>Welcome {session?.user?.name}!</p>
            <p className="my-5 md:my-10 leading-relaxed  ">
              We are always availed to consult on taking your higher education
              to the next level so you can stay competitive in the global world.
              We welcome the opportunity to work with you &ldquo;today&ldquo;
              for &ldquo;tomorrow&lsquo;s&ldquo; better career solutions.
            </p>
            <div className="flex justify-center items-center flex-col gap-10 md:flex-row lg:flex-col">
              <Link
                href={"/contact"}
                className=" btn btn-primary border-0 px-6 focus:outline-none  rounded text-lg items-center justify-center "
              >
                Apply Online &nbsp; <FaArrowRight />
              </Link>
              <span className=" hidden md:block">
                <SocailLink />
              </span>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
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
            className="rounded absolute bottom-0 -right-[0%] lg:-right-[10%] z-[-1] overflow-hidden"
            alt="hero"
            src="/img/bg-oval.svg"
            width={720}
            height={600}
          />
        </div>
        <span className=" md:hidden flex items-center justify-center mt-10">
          <SocailLink />
        </span>
      </section>

      {/* Top University Section */}
      <UniversitySlide />
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 my-10 md:my-16">
          <OurServices />
        </div>
      </div>

      {/* Gallary */}
      <section className=" bg-base-100 ">
        <div className="container mx-auto">
          <Gallary />
        </div>
      </section>

      {/* News  */}
      <div className=" bg-base-200 dark:bg-transparent">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 py-20">
            <News />
          </div>
        </div>
      </div>

      {/* Team  */}
      <div className=" bg-base-200 dark:bg-transparent">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 py-20">
            <TeamServerSide />
          </div>
        </div>
      </div>

      {/* Videos */}
      <section className=" bg-base-100 ">
        <div className="container mx-auto">
          <Videos />
        </div>
      </section>
      {/* Reviews */}
      <section className=" bg-base-200 bg-[url('/img/testimonial_bg.jpg')] bg-no-repeat bg-right-bottom dark:bg-transparent dark:bg-[url('/img/testimonial_bg.jpg')] ">
        <div className="container mx-auto">
          <Reviews />
        </div>
      </section>
      {/* Blog  */}
      <div className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10 py-20">
            <UpcomingUniversityEvents />
          </div>
        </div>
      </div>

      {/* Todo  */}
      {/* <div className="min-h-screen relative bg-slate-200">
        <div className="flex justify-around flex-col items-center h-1/2 ">
          <h1 className=" text-4xl font-bold mt-12 mb-12">Todos Page</h1>
          <Forms />
        </div>
        <div className="flex  flex-col items-center h-1/2 ">
          <GetTodosUI />
        </div>
      </div> */}
    </>
  );
}
