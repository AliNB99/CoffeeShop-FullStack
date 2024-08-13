import ButtonCenter from "@/atoms/home/ButtonCenter";
import { Curve, Logo, LogoType } from "@/utils/svg";

function Footer() {
  return (
    <footer class="relative bg-zinc-700 py-8 md:pb-11 md:pt-[62px]">
      <Curve
        class="absolute top-0 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800 w-[100px] h-[22px] rotate-180
      "
      />
      <div class="absolute top-0 right-0 left-0 mx-auto -translate-y-2/4 hidden md:flex items-center justify-center">
        <ButtonCenter upDirection />
      </div>
      <div class="px-4 md:px-0 text-gray-300 sm:w-[94%] lg:w-[90%] mx-auto">
        <div class="flex justify-between flex-wrap">
          <div>
            <div class="flex ga-x-5 mb-6 md:mb-4.5 text-gray-300">
              <Logo class="w-[57px] h-[54px]" />
              <LogoType class="w-[138px] h-[54px]" />
            </div>
            <p class="xl:max-w-[506px] text-base/[48px]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول،
              خدمات و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع
              فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و
              منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با
              اشتیاق می‌کوشیم.
            </p>
          </div>

          <div class="mt-10 md:mt-[26px]">
            <h4 class="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7">
              دسترسی سریع
            </h4>
            <div class="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                حریم خصوصی
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                عودت کالا
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                شرایط استفاده
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ثبت سفارش
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                پرسش های متداول
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                فرصت های شغلی
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ضمانت نامه
              </a>
              <a
                href="#"
                class="flex items-center gap-x-2 md:gap-x-3 hover:text-orange-300 transition-colors"
              >
                <span class="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ارتباط با ما
              </a>
            </div>
          </div>

          <div class="mt-10 md:mt-[26px]">
            <h4 class="font-DanaDemiBold text-2xl text-white mb-6 md:mb-7">
              در تماس باشیم
            </h4>
            <div>
              <div class="mb-6 md:mb-10">
                <span class="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  <svg class="shrink-0 w-5 md:w-6 h-6 md:h-6">
                    <use href="#map-pin"></use>
                  </svg>
                  بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                </span>
                <div class="flex flex-wrap gap-x-5 gap-y-4 font-DanaMedium">
                  <a
                    href="mailto:info@coffee.com"
                    class="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
                  >
                    <svg class="w-5 md:w-6 h-6 md:h-6">
                      <use href="#envelope"></use>
                    </svg>
                    info@coffee.com
                  </a>
                  <div class="flex items-center gap-x-2 md:gap-x-3">
                    <svg class="w-5 md:w-6 h-6 md:h-6">
                      <use href="#phone"></use>
                    </svg>
                    <span class="ltr-text">0902 123 6628</span>
                    <span class="ltr-text">021 - 6789012</span>
                  </div>
                </div>
              </div>
              <div class="flex gap-x-1.5 md:gap-x-6 ltr-text font-DanaMedium">
                <a
                  href="#"
                  class="flex-center gap-x-2 h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl flex-grow"
                >
                  @golden_coffee
                  <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                    <use href="#telegram"></use>
                  </svg>
                </a>
                <a
                  href="#"
                  class="flex-center gap-x-2 h-12 border border-orange-200 text-orange-200 rounded-xl flex-grow"
                >
                  @golden_coffee
                  <svg class="w-[26px] h-[26px] md:w-[38px] md:h-[38px]">
                    <use href="#instgram"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-between text-xs/5 md:text-base gap-x-4 border-t border-t-white/10 pt-10 md:pt-11 mt-10 md:mt-11">
          <div class="flex items-center gap-x-2.5">
            <div class="flex-center shrink-0 w-[30px] h-[30px] border border-white/10 rounded-full">
              <div class="flex-center w-5 h-5 rounded-full border border-white/20">
                <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-t from-orange-200 to-orange-300"></div>
              </div>
            </div>
            <p>
              تمام حقوق این رابط کاربری متعلق به
              <span class="text-orange-200">سبزلرن</span> میباشد و دانشجوی این
              دوره اجازه استفاده آن را در مصارف شخصی و تجاری ندارد.
            </p>
          </div>
          <span class="ltr-text mr-auto">
            Copyright © 2023 Golden Coffee. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
