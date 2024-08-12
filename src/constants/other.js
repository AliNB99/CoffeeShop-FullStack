import {
  ChatBubbleLeftEllipsisIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

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
    title: "قهوه دمی و اسپرسو",
    image:
      "https://ucarecdn.com/e566b54a-bd8c-45da-b7b2-e54a9eeca777/category1.png",
    link: "/products",
  },
  {
    title: "لوازم جانبی و تجهیزات",
    image:
      "https://ucarecdn.com/08445fae-56b9-410c-940c-32316e8bcd2c/category2.png",
    link: "/products",
  },
  {
    title: "اسپرسو ساز",
    image:
      "https://ucarecdn.com/12133be1-8a23-452a-a3b6-3b540597269e/category3.png",
    link: "/products",
  },
  {
    title: "پک تستر قهوه",
    image:
      "https://ucarecdn.com/4e31c98d-b406-4337-8fb9-aa073cf7cfc9/category4.png",
    link: "/products",
  },
  {
    title: "قهوه ترک",
    image:
      "https://ucarecdn.com/23738ece-3fc2-4c9f-9a43-fccc04037e79/category5.png",
    link: "/products",
  },
];
