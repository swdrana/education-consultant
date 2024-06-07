"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import './styles.css';

// import required modules
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const imgList = [
  "https://www.mobvista.com/_nuxt/img/img_0.72280da.png",
  "https://www.mobvista.com/_nuxt/img/img_1.564625e.png",
  "https://www.mobvista.com/_nuxt/img/img_2.adbefa5.png",
  "https://www.mobvista.com/_nuxt/img/img_3.61766c0.png",
  "https://www.mobvista.com/_nuxt/img/img_4.6402af9.png",
  "https://www.mobvista.com/_nuxt/img/img_5.1dc57d9.png",
  "https://www.mobvista.com/_nuxt/img/img_6.c564059.png",
  "https://www.mobvista.com/_nuxt/img/img_7.2c55042.png",
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
        {imgList.map((img) => (
          <SwiperSlide key={img} className="swiper-slide">
            <Image src={img} alt="" width={200} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
