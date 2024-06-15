import { compare, hash } from "bcryptjs";

const RegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// validation login and signup form
export function formRegisterValidation(form, type) {
  const { email, password, confirmPassword, isAccepted } = form;

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

// codding password by using hash
export async function hashingPassword(password) {
  const result = await hash(password, 12);
  return result;
}

// Verify that the password is correct
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
