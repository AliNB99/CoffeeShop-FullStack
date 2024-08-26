export const authFormSignUp = [
  { type: "text", name: "firstName", placeholder: "نام خود را وارد نمایید" },
  {
    type: "text",
    name: "lastName",
    placeholder: "نام خانوادگی خود را وارد نمایید",
  },
  { type: "text", name: "email", placeholder: "ایمیل خود را وارد نمایید" },
  {
    type: "password",
    name: "password",
    placeholder: "رمز عبور خود را وارد نمایید",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "رمز عبور خود را تایید نمایید",
  },
];

export const authFormSignIn = [
  { type: "text", name: "email", placeholder: "ایمیل خود را وارد نمایید" },
  {
    type: "password",
    name: "password",
    placeholder: "رمز عبور خود را وارد نمایید",
  },
];

export const formSignUpItem = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAccepted: false,
};

export const touchedSignUpItem = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  confirmPassword: false,
  isAccepted: false,
};

export const loginInfo = [
  { title: "ایمیل پنل کاربر", value: "alinb99.dev@gmail.com" },
  { title: "ایمیل پنل ادمین", value: "reza@gmail.com" },
  { title: "رمز عبور", value: "12345678" },
];
