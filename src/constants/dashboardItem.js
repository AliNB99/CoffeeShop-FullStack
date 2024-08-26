import {
  AtSymbolIcon,
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  HeartIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  ReceiptPercentIcon,
  ShoppingBagIcon,
  SparklesIcon,
  TicketIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

////// USER CONSTANT /////

export const userDashboardItem = [
  { title: "داشبورد", link: "/dashboard", icon: <HomeIcon /> },
  { title: "سفارش ها", link: "/dashboard/orders", icon: <ShoppingBagIcon /> },
  { title: "علاقه مندی ها", link: "/dashboard/favorites", icon: <HeartIcon /> },
  {
    title: "تیک های من",
    link: "/dashboard/ticket",
    icon: <ChatBubbleLeftRightIcon />,
  },
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

export const listUserInfo = [
  { name: "user" },
  { name: "phone", title: "شماره تلفن", icon: <PhoneIcon /> },
  { name: "bankInfo", title: "شماره شبا", icon: <CreditCardIcon /> },
  { name: "postalCode", title: "کد پستی", icon: <BuildingOffice2Icon /> },
  { name: "address", title: "آدرس", icon: <MapPinIcon /> },
];

export const ticketMessage = [
  {
    category: "orderTracking",
    title: "درخواست بررسی سفارش",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    category: "finance",
    title: "درخواست بررسی بازگشت وجه سفارش بنده",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    category: "returns",
    title: "درخواست بررسی مرجوع کردن محصول",
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];

// for add and edit product
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

export const formItem = {
  title: "",
  description: "",
  quantity: "",
  price: "",
  discount: "",
  category: "coffee",
  images: [],
  advantages: [],
  disadvantages: [],
  specifications: [],
};

export const AddPropertyListItem = [
  {
    name: "advantages",
    title: "مزایا",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    name: "disadvantages",
    title: "معایب",
    color: "text-red-500",
    bgColor: "bg-red-100",
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

// for table in admin panel

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

export const typeTitleMap = {
  products: "محصول",
  users: "کاربر",
  comments: "نظر",
};
