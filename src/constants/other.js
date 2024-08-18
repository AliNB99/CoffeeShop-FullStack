import {
  ChatBubbleLeftEllipsisIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
  UserGroupIcon,
  BanknotesIcon,
  CreditCardIcon,
  ReceiptPercentIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import {
  Coffee,
  ExpressDelivery,
  Pitcher,
  Support,
  Activity,
  Discovery,
  TicketStar,
} from "@/utils/svg";

export const navbarItem = [
  { title: "دیکشنری", link: "/", icon: <ChatBubbleLeftEllipsisIcon /> },
  { title: "بلاگ", link: "/", icon: <NewspaperIcon /> },
  { title: "درباره ما", link: "/", icon: <UserGroupIcon /> },
  { title: "تماس با ما", link: "/", icon: <PhoneArrowUpRightIcon /> },
];

export const storeDesktopItem = [
  { title: "قهوه ویژه", link: "/products" },
  { title: "ویژه در سطح جهانی", link: "/products" },
  { title: "قهوه درجه یک", link: "/products" },
  { title: "ترکیبات تجاری", link: "/products" },
  { title: "کپسول قهوه", link: "/products" },
  { title: "قهوه زینو برزیلی", link: "/products" },
];

export const storeDropDownMobile = [
  { title: "قهوه ویژه", link: "/products" },
  { title: "ویژه در سطح جهانی", link: "/products" },
  { title: "قهو درجه یک", link: "/products" },
  { title: "ترکیبات تجاری", link: "/products" },
  { title: "کپسول قهوه", link: "/products" },
  { title: "قهوه زیپو برزیلی", link: "/products" },
];

export const categoryCoffeeList = {
  coffee: "قهوه ها",
  accessory: "لوازم جانبی",
};

export const categoryProductList = [
  {
    title: "قهوه ترک",
    image: "/images/categories/category5.png",
    link: "/products?category=coffee",
  },
  {
    title: "اسپرسو ساز",
    image: "/images/categories/category3.png",
    link: "/products?category=accessory",
  },
  {
    title: "پک تستر قهوه",
    image: "/images/categories/category4.png",
    link: "/products?category=coffee",
  },
  {
    title: "قهوه دمی و اسپرسو",
    image: "/images/categories/category1.png",
    link: "/products?category=coffee",
  },
  {
    title: "لوازم جانبی و تجهیزات",
    image: "/images/categories/category2.png",
    link: "/products?category=accessory",
  },
];

export const blogList = [
  {
    title: "طرز تهیه کیک و شیرینی کنار با قهوه خط دوم اسم طولانی",
    image: "/images/blogs/blog-1.png",
  },
  {
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "/images/blogs/blog-2.png",
  },
  {
    title: "طرز تهیه یک فنجان کافه زینو برزیلی",
    image: "/images/blogs/blog-3.png",
  },
  {
    title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
    image: "/images/blogs/blog-4.png",
  },
];

export const listOptionStore = [
  {
    title: "پشتیبانی شبانه روزی",
    subTitle: "7 روز هفته ، 24 ساعته",
    iconLight: <Support className="dark:hidden w-20 h-20" />,
  },
  {
    title: "امکان تحویل اکسپرس",
    subTitle: "ارسال بسته با سرعت باد",
    iconLight: <ExpressDelivery className="dark:hidden w-24 h-20" />,
  },
  {
    title: "اکسسوری قهوه",
    subTitle: "وسایل و ادوات دم آوری",
    iconLight: <Pitcher className="dark:hidden w-20 h-20" />,
  },
  {
    title: "رست تخصصی",
    subTitle: "تازه برشته شده و با کیفیت",
    iconLight: <Coffee className="dark:hidden w-20 h-20" />,
  },
];

export const listCheckout = [
  {
    title: "قیمت کل(تومان)",
    icon: <BanknotesIcon />,
    keyValue: "totalPrice",
  },
  {
    title: "تعداد محصولات",
    icon: <SparklesIcon />,
    keyValue: "counterItems",
  },
  {
    title: "مقدار تخفیف(تومان)",
    icon: <ReceiptPercentIcon />,
    keyValue: "totalDiscount",
  },
  {
    title: "قیمت نهایی(تومان)",
    icon: <CreditCardIcon />,
    keyValue: "finalPrice",
  },
];

export const listCoffeeClub = [
  {
    title: "چرخ و بخت",
    icon: (
      <Discovery className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
    ),
  },
  {
    title: "ماموریت ها",
    icon: (
      <Activity className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
    ),
  },
  {
    title: "جایزه ها",
    icon: (
      <TicketStar className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto" />
    ),
  },
];
