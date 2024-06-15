import Link from "next/link";

function StoreDropDownMobile({ isShow }) {
  return (
    <ul
      className={`${
        isShow.storeItem ? "h-[200px] mt-3" : "h-0"
      } overflow-hidden transition-all pr-7 space-y-4 text-zinc-600 dark:text-white text-sm tracking-normal rounded-2xl child:transition-all child-hover:text-orange-300`}
    >
      <li>
        <Link href="/">قهوه ویژه</Link>
      </li>
      <li>
        <Link href="/">ویژه در سطح جهانی</Link>
      </li>
      <li>
        <Link href="/">قهوه درجه یک</Link>
      </li>
      <li>
        <Link href="/">ترکیبات تجاری</Link>
      </li>
      <li>
        <Link href="/">کپسول قهوه</Link>
      </li>
      <li>
        <Link href="/">قهوه زیپو برزیلی</Link>
      </li>
    </ul>
  );
}

export default StoreDropDownMobile;
