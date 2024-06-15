import {
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  IdentificationIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const userDashboardItem = [
  { title: "داشبورد", link: "/", icon: <HomeIcon /> },
  { title: "سفارش ها", link: "/", icon: <ShoppingCartIcon /> },
  { title: "علاقه مندی ها", link: "/", icon: <HeartIcon /> },
  { title: "جزئیات اکانت", link: "/", icon: <IdentificationIcon /> },
  { title: "لیست پیام ها", link: "/", icon: <EnvelopeIcon /> },
];

////// ADMIN CONSTANT /////

export const adminDashboardItem = [
  { title: "پیشخوان", link: "/admin", icon: <BriefcaseIcon /> },
  { title: "محصولات", link: "/admin/all-products", icon: <ShoppingBagIcon /> },
  { title: "کاربران", link: "/admin/customers", icon: <UsersIcon /> },
  { title: "کامنت ها", link: "/", icon: <ChatBubbleLeftRightIcon /> },
  { title: "تیکت ها", link: "/", icon: <ClipboardDocumentCheckIcon /> },
];

export const addProductForm = [
  {
    name: "title",
    type: "text",
    label: "عنوان",
    placeholder: "مثلا: قهوه ترک بن مانو 250گرم",
  },
  {
    name: "description",
    type: "text",
    label: "توضیحات",
    textarea: true,
    placeholder: "خصوصیاتی در مورد محصول و توضیحات مورد نیاز مشتری ...",
  },
  {
    name: "quantity",
    type: "number",
    label: "تعداد",
    placeholder: "مقدار تعداد موجودی این محصول در انبار",
    min: 0,
  },
  {
    name: "price",
    type: "number",
    label: "قیمت",
    placeholder: "قیمت به تومان وارد شود",
    min: 0,
  },
  {
    name: "discount",
    type: "number",
    label: "تخفیف",
    placeholder: "میزان درصد تخیف روی محصول از 1 تا 100 درصد (اختیاری)",
    min: 1,
    max: 99,
  },
];

export const addCoffeeItem = [
  { title: "برنده", value: "", placeholder: "مثلا: بن مانو" },
  { title: "وزن (گرم)", value: "", placeholder: "مثلا: 250 گرم" },
  { title: "تاریخ تولید", value: "", placeholder: "مثلا: 1402/01/05" },
  { title: "نوع قهوه", value: "", placeholder: "مثلا:قهوه آسیاب شده " },
  { title: "نسبت قهوه (عربیکا / روبستا)", value: "", placeholder: "70/30" },
  { title: "دستگاه سازگار", value: "", placeholder: "مثلا: موکاپات" },
];

export const addAccessoryItem = [
  { title: "برنده", value: "", placeholder: "مثلا: دلونگی (delonghi)" },
  { title: "وزن محصول (گرم)", value: "", placeholder: "مثلا: 250 گرم" },
];


