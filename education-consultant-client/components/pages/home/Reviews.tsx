"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";
import Review from "./Review";

const reviews = [
  {
    _id: 1,
    icon: "fas fa-quote-left",
    description:
      "This institution has exceeded my expectations in terms of academic excellence and extracurricular activities. I highly recommend it to all students and parents.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "Lisa Anderson",
    designation: "Alumnus",
    rating: 4,
  },
  {
    _id: 2,
    icon: "fas fa-quote-left",
    description:
      "The faculty and staff are incredibly supportive and create an amazing learning environment. I couldn’t have asked for a better experience.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "James Smith",
    designation: "Parent",
    rating: 5,
  },
  {
    _id: 3,
    icon: "fas fa-quote-left",
    description:
      "A top-notch institution with an excellent curriculum that balances academics and extracurriculars perfectly.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "Maria Johnson",
    designation: "Student",
    rating: 4,
  },
  {
    _id: 4,
    icon: "fas fa-quote-left",
    description:
      "The best decision I made for my child’s education. Their growth and development here have been incredible.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "Robert Brown",
    designation: "Parent",
    rating: 5,
  },
  {
    _id: 5,
    icon: "fas fa-quote-left",
    description:
      "The campus and resources are phenomenal. It truly sets a benchmark for quality education.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "Emily Davis",
    designation: "Alumnus",
    rating: 5,
  },
  {
    _id: 6,
    icon: "fas fa-quote-left",
    description:
      "An exceptional institution with passionate teachers and a wonderful community spirit.",
    img: "https://scontent-mrs2-2.xx.fbcdn.net/v/t39.30808-1/277676511_3180203492268845_5769328862801171419_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_ohc=_BCYlWWzfccQ7kNvgHZJD_M&_nc_zt=24&_nc_ht=scontent-mrs2-2.xx&_nc_gid=Atg2Yg98eWCuRcIAardBSFB&oh=00_AYBGiLD7QDK9SVX3jDghmxBNPMDXDrHMNLyFru77hne9-w&oe=678A90D8",
    name: "William Wilson",
    designation: "Student",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <div className=" container mx-auto py-20">
      <h1 className=" text-3xl font-bold text-center text-base-100">Our Success Stories</h1>
      <div className=" flex justify-center">
        <p className=" w-full mx-5 md:mx-0 md:w-2/3 text-center font-light my-5  text-base-200">
          To maintain the reputation of a quality, high standard, and reliable solution by establishing ourselves as one-stop service providers in the Career Industry.
        </p>
      </div>
      <div className=" py-8">
        <Swiper
          slidesPerView={1} // Default to 1 slide
          pagination={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            900: {
              slidesPerView: 2, // Show 2 slides on screens 640px and above
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="swiper-slide">
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
