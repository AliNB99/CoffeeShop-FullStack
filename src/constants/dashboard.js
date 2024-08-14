import {
  AtSymbolIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  EnvelopeIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SwatchIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const userDashboardItem = [
  { title: "داشبورد", link: "/dashboard/cart", icon: <HomeIcon /> },
  { title: "سفارش ها", link: "/dashboard/orders", icon: <ShoppingCartIcon /> },
  { title: "علاقه مندی ها", link: "/dashboard/favorites", icon: <HeartIcon /> },
  { title: "لیست پیام ها", link: "/dashboard/ticket", icon: <EnvelopeIcon /> },
];

export const userInformation = [
  { name: "firstName", title: "نام", icon: <UserIcon /> },
  { name: "lastName", title: "نام خانوادگی", icon: <UserGroupIcon /> },
  { name: "email", title: "ایمیل", icon: <AtSymbolIcon /> },
  { name: "phone", title: "شماره تلفن", icon: <PhoneIcon /> },
  { name: "bankInfo", title: "شماره شبا", icon: <CreditCardIcon /> },
  { name: "postalCode", title: "کد پستی", icon: <BuildingOffice2Icon /> },
  { name: "address", title: "آدرس", icon: <MapPinIcon /> },
];

////// ADMIN CONSTANT /////

export const adminDashboardItem = [
  {
    title: "پیشخوان",
    link: "/admin",
    icon: <BriefcaseIcon />,
  },
  {
    title: "محصولات",
    link: "/admin/products-list",
    icon: <ShoppingBagIcon />,
  },
  {
    title: "کاربران",
    link: "/admin/user-list",
    icon: <UsersIcon />,
  },
  {
    title: "نظرات",
    link: "/admin/comment-list",
    icon: <ChatBubbleLeftRightIcon />,
  },
  {
    title: "تیکت ها",
    link: "/",
    icon: <ClipboardDocumentCheckIcon />,
  },
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
  { title: "نوع قهوه", value: "", placeholder: "مثلا: قهوه آسیاب شده " },
  {
    title: "نسبت قهوه (عربیکا / روبستا)",
    value: "",
    placeholder: "مثلا: 70/30",
  },
  { title: "دستگاه سازگار", value: "", placeholder: "مثلا: موکاپات" },
];

export const addAccessoryItem = [
  { title: "برنده", value: "", placeholder: "مثلا: دلونگی (delonghi)" },
  { title: "وزن محصول (گرم)", value: "", placeholder: "مثلا: 250 گرم" },
];

export const columnsProductsTable = [
  { name: "شماره", uid: "id" },
  { name: "عکس", uid: "images" },
  { name: "نام محصول", uid: "title" },
  { name: "دسته بندی", uid: "category" },
  { name: "قیمت (تومان)", uid: "price" },
  { name: "تعداد", uid: "quantity" },
  { name: "وضعیت", uid: "status" },
  { name: "تخفیف (درصد)", uid: "discount" },
  { name: "ابزار مدیریت", uid: "actions" },
];

export const columnsUsersTable = [
  { name: "شماره", uid: "id" },
  { name: "نام کاربری", uid: "name" },
  { name: "نقش", uid: "role" },
  { name: "ایمیل", uid: "email" },
  { name: "وضعیت", uid: "status" },
  { name: "ابزار مدیریت", uid: "actions" },
];

export const columnsCommentsTable = [
  { name: "شماره", uid: "id" },
  { name: "نویسنده", uid: "userInfo" },
  { name: "متن دیدگاه", uid: "description" },
  { name: "امتیاز", uid: "rate" },
  { name: "وضعیت", uid: "status" },
  { name: "ابزار مدیریت", uid: "actions" },
];

export const roleColorMap = {
  OWNER: "primary",
  ADMIN: "success",
  USER: "warning",
};

export const CategoryColorMap = {
  coffee: "warning",
  accessory: "secondary",
};

export const roleTitle = {
  OWNER: "مالک",
  ADMIN: "مدیر",
  USER: "کاربر",
};

export const categoryTitle = {
  coffee: "قهوه",
  accessory: "لوازم جانبی",
};

export const statusCommentTitle = {
  pending: "در انتظار تایید",
  accepted: "تایید شد",
  unaccepted: "تایید نشد",
};

export const statusCommentColorMap = {
  pending: "warning",
  accepted: "success",
  unaccepted: "danger",
};
