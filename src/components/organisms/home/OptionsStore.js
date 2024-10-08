"use client";

import { listOptionStore } from "@/constants/homePageItem";

function OptionsStore() {
  return (
    <section className="mb-12 md:mb-36">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between child:w-1/2 lg:child:w-auto gap-y-11 text-zinc-700 dark:text-white">
          {listOptionStore.map((i, index) => (
            <div
              key={index}
              className="flex items-center flex-col sm:flex-row gap-x-4 gap-y-5 text-center lg:text-right"
            >
              {i.iconLight}
              <div>
                <h5 className="font-bold text-sm md:text-lg/6 mb-1 md:mb-3.5">
                  {i.title}
                </h5>
                <span className="text-xs md:text-sm/6">{i.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OptionsStore;
