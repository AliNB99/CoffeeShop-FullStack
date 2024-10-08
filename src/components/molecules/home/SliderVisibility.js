"use client";

import SwiperButtonCustom from "@/atoms/home/SwiperButtonCustom";
import CardProduct from "@/organisms/common/CardProduct";
import TitleSection from "@/atoms/home/TitleSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import NotFoundProductLabel from "@/atoms/home/NotFoundProductLabel";

const breakpoints = {
  610: {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  810: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1260: {
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
        loop
        slidesPerView={2}
        spaceBetween={12}
        breakpoints={breakpoints}
      >
        {data.length ? (
          data.map((p, index) => (
            <SwiperSlide key={index} className="my-1" virtualIndex={index}>
              <CardProduct data={p} />
            </SwiperSlide>
          ))
        ) : (
          <NotFoundProductLabel label="هیچ محصولی یافت نشد؟!" />
        )}
      </Swiper>
    </div>
  );
}

export default SliderVisibility;
