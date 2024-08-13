import { PhoneIcon } from "@heroicons/react/24/outline";

function OrderRegistration() {
  return (
    <section class="contact-us mb-16 md:mb-28">
      <div class="container">
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-6">
          <img class="w-80 shrink-0" src="/images/contact.png" alt="contact" />
          <div class="text-zinc-700 dark:text-white">
            <h3 class="font-Morabba font-medium text-2xl md:text-5xl mb-0.5 md:mb-1.5">
              یکی از بهترین قهوه ها !
            </h3>
            <span class="font-Morabba text-lg md:text-3xl/[48px]">
              کیفیت قهوه را از ما بخواهید ...
            </span>
            <div class="flex gap-x-2.5 my-5 md:my-6">
              <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span class="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
            </div>
            <p class="text-lg md:text-2xl">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
              پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
              است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
              را می سازد!
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center gap-x-2 h-[50px] md:h-[60px] px-6 mt-5 md:mt-6 border md:border-2 border-orange-300 rounded-full md:text-xl tracking-tightest text-orange-300"
            >
              <PhoneIcon />
              ثبت سفارش تلفنی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderRegistration;
