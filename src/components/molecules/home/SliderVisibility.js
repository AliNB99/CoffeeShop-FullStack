"use client";

import CartProduct from "@/organisms/common/CartProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import TitleSection from "@/atoms/home/TitleSection";
import SwiperButtonCustom from "@/atoms/home/SwiperButtonCustom";

const breakpoints = {
  610: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  810: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
};

function SliderVisibility({ data }) {
  const swiperRef = useRef(null);

  return (
    <div className="container">
      <div className="flex items-center justify-between mb-10">
        <TitleSection
          title="محصولات پر فروش"
          subTitle="پیشنهاد قهوه خور ها ..."
        />
        <SwiperButtonCustom swiperRef={swiperRef} />
      </div>
      <Swiper
        ref={swiperRef}
        navigation
        loop
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={breakpoints}
      >
        {data.map((p, index) => (
          <SwiperSlide className="my-1" virtualIndex={index}>
            <CartProduct data={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderVisibility;
