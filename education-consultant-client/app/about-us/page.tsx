import aboutBanner from "@/public/img/feature/about-banner.jpeg";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
/* eslint-disable @next/next/no-img-element */
import peopleGroup from "@/public/img/static/people-group.png";
import world from "@/public/img/static/world.png";
import graduation from "@/public/img/static/graduation.png";
import customerCare from "@/public/img/static/customer-care.png";
import mission from "@/public/img/static/01.png";
import vision from "@/public/img/static/02.png";
import goal from "@/public/img/static/03.png";
export default function page() {
  return (
    <div>
      <section className=" ">
        <h1 className=" text-2xl lg:text-4xl text-center mt-10 lg:mt-16 font-black">
          About us
        </h1>
        {/* Content Left Section  */}
        <div className="container px-5 py10 md:py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 ">
              <p>
                Eduplan student consultancy is one of the renowned international
                education consultancy firms which assisting overseas students
              </p>
              <div className=" flex justify-center items-center my-5 gap-5">
                <img
                  className=" rounded-full"
                  src="https://dummyimage.com/70x70"
                  alt=""
                />
                <p>
                  Get life-time free access with one time payment in our courses
                  plan. Easy & simple!
                </p>
              </div>
              <div className=" flex justify-center items-center my-5 gap-5">
                <img
                  className=" rounded-full"
                  src="https://dummyimage.com/70x70"
                  alt=""
                />
                <p>
                  Get life-time free access with one time payment in our courses
                  plan. Easy & simple!
                </p>
              </div>
              <div className=" flex justify-center items-center my-5 gap-5">
                <img
                  className=" rounded-full"
                  src="https://dummyimage.com/70x70"
                  alt=""
                />
                <p>
                  Get life-time free access with one time payment in our courses
                  plan. Easy & simple!
                </p>
              </div>
              <button className=" btn btn-primary mt-8">
                {" "}
                Get Free Consultation <FaArrowRight />
              </button>
            </div>
            <Image
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src={aboutBanner}
              alt="about banner"
            />
          </div>
        </div>

        {/* Counter Section  */}
        <section className=" body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2 flex items-center justify-center gap-5">
                <Image src={peopleGroup} alt="" />
                <div>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary">
                    2.7K
                  </h2>
                  <p className="leading-relaxed">More then students</p>
                </div>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 flex items-center justify-center gap-5">
                <Image src={graduation} alt="" />
                <div>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary">
                    1.8K
                  </h2>
                  <p className="leading-relaxed">Total courses</p>
                </div>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 flex items-center justify-center gap-5">
                <Image src={customerCare} alt="" />
                <div>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary">
                    3.9K
                  </h2>
                  <p className="leading-relaxed">Total consultants</p>
                </div>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 flex items-center justify-center gap-5">
                <Image src={world} alt="" />
                <div>
                  <h2 className="title-font font-medium sm:text-4xl text-3xl text-primary">
                    27
                  </h2>
                  <p className="leading-relaxed">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Right Section  */}
        <div className="container px-5 py10 md:py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <Image
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 md:pr-10 pb-10 md:pb-0"
              src={aboutBanner}
              alt="about banner"
            />
            <div className="lg:w-2/5 md:w-1/2 ">
              <h1 className=" text-2xl lg:text-4xl text-center mb-5 font-bold">
                Why chose us
              </h1>
              <p>
                87% of people learning for professional development report
                career benefits
              </p>
              <div className=" flex justify-center items-center my-5 gap-5">
                <Image
                  className=" rounded-full"
                  src={vision}
                  alt=""
                />
                <div>
                  <h3 className=" text-xl font-bold">Our Vision</h3>
                  <p>
                    Our vision is to be the leading student consultancy and
                    recruiting all aspects.
                  </p>
                </div>
              </div>
              <div className=" flex justify-center items-center my-5 gap-5">
                <Image
                  className=" rounded-full"
                  src={mission}
                  alt=""
                />
                <div>
                  <h3 className=" text-xl font-bold">Our Mission</h3>
                  <p>
                    Our vision is to be the leading student consultancy and
                    recruiting all aspects.
                  </p>
                </div>
              </div>
              <div className=" flex justify-center items-center my-5 gap-5">
                <Image
                  className=" rounded-full"
                  src={goal}
                  alt=""
                />
                <div>
                  <h3 className=" text-xl font-bold">Our Goal</h3>
                  <p>
                    Our vision is to be the leading student consultancy and
                    recruiting all aspects.
                  </p>
                </div>
              </div>

              <button className=" btn btn-primary my-8 lg:mb-0 float-right hover:btn-secondary">
                <FaArrowLeft />
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
