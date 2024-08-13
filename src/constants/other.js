import {
  ChatBubbleLeftEllipsisIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  Coffee,
  CoffeeDark,
  ExpressDelivery,
  ExpressDeliveryDark,
  Pitcher,
  PitcherDark,
  Support,
  SupportDark,
} from "@/utils/svg";

export const navbarItem = [
  { title: "دیکشنری", link: "/", icon: <ChatBubbleLeftEllipsisIcon /> },
  { title: "بلاگ", link: "/", icon: <NewspaperIcon /> },
  { title: "درباره ما", link: "/", icon: <UserGroupIcon /> },
  { title: "تماس با ما", link: "/", icon: <PhoneArrowUpRightIcon /> },
];

export const storeDesktopItem = [
  { title: "قهوه ویژه", link: "/" },
  { title: "ویژه در سطح جهانی", link: "/" },
  { title: "قهوه درجه یک", link: "/" },
  { title: "ترکیبات تجاری", link: "/" },
  { title: "کپسول قهوه", link: "/" },
  { title: "قهوه زینو برزیلی", link: "/" },
];

export const categoryCoffeeList = {
  coffee: "قهوه ها",
  accessory: "لوازم جانبی",
};

export const categoryProductList = [
  {
    title: "قهوه ترک",
    image: "/images/categories/category5.png",
    link: "/products",
  },
  {
    title: "اسپرسو ساز",
    image: "/images/categories/category3.png",
    link: "/products",
  },
  {
    title: "پک تستر قهوه",
    image: "/images/categories/category4.png",
    link: "/products",
  },
  {
    title: "قهوه دمی و اسپرسو",
    image: "/images/categories/category1.png",
    link: "/products",
  },
  {
    title: "لوازم جانبی و تجهیزات",
    image: "/images/categories/category2.png",
    link: "/products",
  },
];

export const blogList = [
  {
    title: "طرز تهیه کیک و شیرینی کنار با قهوه خط دوم اسم طولانی",
    image: "images/blogs/blog-1.png",
  },
  {
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "images/blogs/blog-2.png",
  },
  {
    title: "طرز تهیه یک فنجان کافه زینو برزیلی",
    image: "images/blogs/blog-3.png",
  },
  {
    title: "طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی",
    image: "images/blogs/blog-4.png",
  },
];

export const listOptionStore = [
  {
    title: "پشتیبانی شبانه روزی",
    subTitle: "7 روز هفته ، 24 ساعته",
    iconLight: <Support class="dark:hidden w-20 h-20" />,
    iconDark: <SupportDark class="hidden dark:inline-block w-20 h-20" />,
  },
  {
    title: "امکان تحویل اکسپرس",
    subTitle: "ارسال بسته با سرعت باد",
    iconLight: <ExpressDelivery class="dark:hidden w-24 h-20" />,
    iconDark: (
      <ExpressDeliveryDark class="hidden dark:inline-block w-24 h-20" />
    ),
  },
  {
    title: "اکسسوری قهوه",
    subTitle: "وسایل و ادوات دم آوری",
    iconLight: <Pitcher class="dark:hidden w-20 h-20" />,
    iconDark: <PitcherDark class="hidden dark:inline-block w-20 h-20" />,
  },
  {
    title: "رست تخصصی",
    subTitle: "تازه برشته شده و با کیفیت",
    iconLight: <Coffee class="dark:hidden w-20 h-20" />,
    iconDark: <CoffeeDark class="hidden dark:inline-block w-20 h-20" />,
  },
];
