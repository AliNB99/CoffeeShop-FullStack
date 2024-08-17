import { PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function OrderRegistrationByPhone() {
  return (
    <section className="contact-us mb-16 md:mb-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-12">
          <Image
            width={500}
            height={500}
            className="w-80 shrink-0"
            src="/images/contact.png"
            alt="contact"
          />
          <div className="text-zinc-700 dark:text-white">
            <h3 className="font-Morabba font-medium text-2xl md:text-5xl mb-0.5 md:mb-1.5">
              یکی از بهترین قهوه ها !
            </h3>
            <span className="font-Morabba text-lg md:text-3xl/[48px]">
              کیفیت قهوه را از ما بخواهید ...
            </span>
            <div className="flex gap-x-2.5 my-5 md:my-6">
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
            </div>
            <p className="text-lg md:text-2xl">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
              پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده
              است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما
              را می سازد!
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-x-2 h-12 md:h-14 px-6 mt-5 md:mt-6 border md:border-2 border-orange-300 rounded-full md:text-xl font-medium tracking-tightest text-orange-300"
            >
              <PhoneIcon className="md:w-6 md:h-6" />
              ثبت سفارش تلفنی
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderRegistrationByPhone;
