import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function SwiperButtonCustom({ swiperRef }) {
  const nextHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevHandler = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="flex items-center gap-3">
      <button onClick={prevHandler} className="swiper-button-custom">
        <ChevronRightIcon />
      </button>
      <button onClick={nextHandler} className="swiper-button-custom">
        <ChevronLeftIcon />
      </button>
    </div>
  );
}

export default SwiperButtonCustom;
