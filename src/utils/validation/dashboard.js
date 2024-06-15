export function formProductValidation(form) {
  const { title, price, quantity, description, specifications } = form;

  const warning = {};

  if (!title) {
    warning.title = "لطفا عنوان محصول را وارد نمایید";
  } else {
    delete warning.title;
  }
  if (!price) {
    warning.price = "لطفا قیمت محصول را وارد نمایید";
  } else {
    delete warning.price;
  }
  if (!quantity) {
    warning.quantity = "لطفا تعداد موجودی محصول را وارد نمایید";
  } else {
    delete warning.quantity;
  }
  if (!description) {
    warning.description = "لطفا توضیحاتی درمورد محصول وارد نمایید";
  } else {
    delete warning.description;
  }

  for (const item of specifications) {
    if (!item.value) {
      warning.specifications = "لطفا تمام مقادیر مورد نیاز وارد نمایید.";
    }
  }

  return warning;
}
