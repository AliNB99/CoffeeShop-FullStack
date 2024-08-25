import {
  AtSymbolIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  TicketIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const userDashboardItem = [
  { title: "داشبورد", link: "/dashboard", icon: <HomeIcon /> },
  { title: "سفارش ها", link: "/dashboard/orders", icon: <ShoppingBagIcon /> },
  { title: "علاقه مندی ها", link: "/dashboard/favorites", icon: <HeartIcon /> },
  {
    title: "تیک های من",
    link: "/dashboard/ticket",
    icon: <ChatBubbleLeftRightIcon />,
  },
  { title: "سبد خرید", link: "/dashboard/cart", icon: <ShoppingCartIcon /> },
];

export const userInformation = [
  { name: "firstName", title: "نام", icon: <UserIcon /> },
  { name: "lastName", title: "نام خانوادگی", icon: <UserGroupIcon /> },
  { name: "email", title: "ایمیل", icon: <AtSymbolIcon /> },
  { name: "phone", title: "شماره تلفن", type: "number", icon: <PhoneIcon /> },
  {
    name: "bankInfo",
    title: "شماره شبا",
    type: "number",
    icon: <CreditCardIcon />,
  },
  {
    name: "postalCode",
    title: "کد پستی",
    type: "number",
    icon: <BuildingOffice2Icon />,
  },
  { name: "address", title: "آدرس", icon: <MapPinIcon /> },
];

export const listCartUserPanel = [
  {
    title: "مجموع پرداخت",
    value: 5640000,
    unit: "تومان",
    bgColor: "bg-amber-300",
    bgColorIcon: "bg-amber-200",
    icon: <CreditCardIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "موجودی حساب",
    value: 850000,
    unit: "تومان",
    bgColor: "bg-green-500",
    bgColorIcon: "bg-green-400",
    icon: <CurrencyDollarIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "مجموع تیکت ها",
    unit: "تیکت",
    value: 3,
    bgColor: "bg-rose-600",
    bgColorIcon: "bg-rose-500",
    icon: <TicketIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "تعداد سفارش",
    unit: "بار",
    value: 15,
    bgColor: "bg-blue-500",
    bgColorIcon: "bg-blue-400",
    icon: <CheckBadgeIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
];

////// ADMIN CONSTANT /////

export const listCardAdminPanel = [
  {
    title: "آمار بازدید امروز سایت",
    unit: "نفر",
    bgColor: "bg-amber-300",
    bgColorIcon: "bg-amber-200",
    count: 310,
    icon: <ChartPieIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "میزان فروش امروز سایت",
    unit: "تومان",
    bgColor: "bg-green-500",
    bgColorIcon: "bg-green-400",
    count: 23120000,
    icon: <BanknotesIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
  {
    title: "مجموع فروش سایت",
    unit: "تومان",
    bgColor: "bg-rose-600",
    bgColorIcon: "bg-rose-500",
    count: 540310000,
    icon: (
      <PresentationChartLineIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />
    ),
  },
  {
    title: "تعداد کاربران فعال سایت",
    unit: "نفر",
    bgColor: "bg-blue-500",
    bgColorIcon: "bg-blue-400",
    count: 2310,
    icon: <UserGroupIcon className="md:w-7 md:h-7 lg:w-10 lg:h-10" />,
  },
];

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
    link: "/admin/ticket-list",
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
    placeholder: "خصوصیاتی در مورد محصول و توضیحات ...",
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
  { name: "brand", title: "برنده", value: "", placeholder: "مثلا: بن مانو" },
  {
    name: "weight",
    title: "وزن (گرم)",
    value: "",
    placeholder: "مثلا: 250 گرم",
  },
  {
    name: "productionDate",
    title: "تاریخ تولید",
    value: "",
    placeholder: "مثلا: 1402/01/05",
  },
  {
    name: "coffeeType",
    title: "نوع قهوه",
    value: "",
    placeholder: "مثلا: قهوه آسیاب شده ",
  },
  {
    name: "coffeeRatio",
    title: "نسبت قهوه (عربیکا / روبستا)",
    value: "",
    placeholder: "مثلا: 70/30",
  },
  {
    name: "device",
    title: "دستگاه سازگار",
    value: "",
    placeholder: "مثلا: موکاپات",
  },
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
  { name: "وضعیت", uid: "status", sortable: true },
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

export const listUserInfo = [
  { name: "user" },
  { name: "phone", title: "شماره تلفن", icon: <PhoneIcon /> },
  { name: "bankInfo", title: "شماره شبا", icon: <CreditCardIcon /> },
  { name: "postalCode", title: "کد پستی", icon: <BuildingOffice2Icon /> },
  { name: "address", title: "آدرس", icon: <MapPinIcon /> },
];
