"use client";

// import Swiper core and required modules
import { Navigation, Pagination, Thumbs, FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import Image from "next/image";
import CustomImage from "@/atoms/CustomImage";

function SliderProductImage({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "gray",
          "--swiper-pagination-color": "gray",
          "--swiper-navigation-size": "15px",
        }}
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={10}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="text-center mySwiper2"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="h-full flex justify-center items-center mb-5">
              <CustomImage
                src={img}
                width={300}
                height={300}
                alt={img}
                className="transition-opacity opacity-0 duration-[1s]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper border-2 dark:border-zinc-700 rounded-2xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full p-1">
              <CustomImage
                src={img}
                width={100}
                height={100}
                alt={img}
                className="transition-opacity opacity-0 duration-[1s]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SliderProductImage;
