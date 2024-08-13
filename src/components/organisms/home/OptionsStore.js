import { listOptionStore } from "@/constants/other";

function OptionsStore() {
  return (
    <section class="mb-12 md:mb-36">
      <div class="container">
        <div class="flex flex-wrap items-center justify-between child:w-1/2 lg:child:w-auto gap-y-11 text-zinc-700 dark:text-white">
          {listOptionStore.map((i) => (
            <div class="flex items-center flex-col sm:flex-row gap-x-4 gap-y-5 text-center lg:text-right">
              {i.iconLight}
              {i.iconDark}
              <div>
                <h5 class="font-bold text-sm md:text-lg/6 mb-1 md:mb-3.5">
                  {i.title}
                </h5>
                <span class="text-xs md:text-sm/6">{i.subTitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OptionsStore;
