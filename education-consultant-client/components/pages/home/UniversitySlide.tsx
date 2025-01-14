"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img_0 from "@/public/img/feature/img_0.png";
import img_2 from "@/public/img/feature/img_2.png";
import img_3 from "@/public/img/feature/img_3.png";
import img_6 from "@/public/img/feature/img_6.png";
import img_7 from "@/public/img/feature/img_7.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './styles.css';

// import required modules
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const imgList = [
  img_0,
  img_2,
  img_3,
  img_6,
  img_7
];
export default function UniversitySlide() {
  return (
    <div className=" py-8">
      <Swiper
        slidesPerView={4}
        // spaceBetween={40}
        // freeMode={true}
        pagination={false}
        // modules={[FreeMode, Pagination]}
        //   centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //   navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imgList.map((img,i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <Image src={img} alt="" width={200} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
