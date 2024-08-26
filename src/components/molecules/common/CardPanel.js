"use client";

import CountUp from "./CountUp";

function CardPanel({ value, title, bgColor, bgColorIcon, icon, unit }) {
  return (
    <div
      className={`w-full h-14 sm:h-16 lg:h-20 rounded-2xl flex items-center gap-2 md:gap-5 shadow-medium p-2 ${bgColor} text-white`}
    >
      <div className={`${bgColorIcon} p-2 rounded-lg lg:rounded-2xl`}>
        {icon}
      </div>
      <div className="h-16 flex flex-col items-start justify-center">
        <span className="xs:font-bold text-xs lg:text-sm">{title}</span>
        <div>
          <span className="font-bold text-xs md:text-xl">
            {<CountUp end={value} duration={2} />}
          </span>
          <span className="hidden xs:inline text-xs md:font-bold mr-1">
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardPanel;
