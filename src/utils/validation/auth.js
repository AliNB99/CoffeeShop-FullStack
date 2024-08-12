const RegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const RegexName = /^[ آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیئs]+$/;

// validation login and signup form
export function formRegisterValidation(form, type) {
  const { firstName, lastName, email, password, confirmPassword, isAccepted } =
    form;

  const warning = {};

  if (!email) {
    warning.email = "لطفا ایمیل خود را وارد نمایید";
  } else if (!RegexEmail.test(email)) {
    warning.email = "لطفا ایمیل را با فرمت صحیح وارد کنید";
  } else {
    delete warning.email;
  }

  if (!password) {
    warning.password = "لطفا رمز عبور را وارد نمایید";
  } else if (password.length < 8) {
    warning.password = "رمز عبور حداقل باید 8 حرف باشد";
  } else {
    delete warning.password;
  }

  if (type === "signup") {
    if (!firstName) {
      warning.firstName = "لطفا نام خود را وارد نمایید";
    } else if (!RegexName.test(firstName)) {
      warning.firstName = "لطفا نام را با حروف فارسی وارد نمایید";
    } else {
      delete warning.firstName;
    }

    if (!lastName) {
      warning.lastName = "لطفا نام خانوادگی خود را وارد نمایید";
    } else if (!RegexName.test(lastName)) {
      warning.lastName = "لطفا نام خانوادگی را با حروف فارسی وارد نمایید";
    } else {
      delete warning.lastName;
    }

    if (!confirmPassword) {
      warning.confirmPassword = "لطفا رمز عبور خود را تایید نمایید";
    } else if (confirmPassword !== password) {
      warning.confirmPassword = "مقدار وارد شده با پسورد مطابقت ندارد";
    } else {
      delete warning.confirmPassword;
    }

    if (!isAccepted) {
      warning.isAccepted = true;
    } else {
      delete warning.isAccepted;
    }
  }

  return warning;
}
