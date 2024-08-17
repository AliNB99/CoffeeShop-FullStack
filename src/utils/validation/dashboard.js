export function formProductValidation(form) {
  const { title, price, quantity, description, specifications, discount } =
    form;

  const warning = {};

  if (!title) {
    warning.title = "لطفا عنوان محصول را وارد نمایید";
  } else {
    delete warning.title;
  }
  if (!price) {
    warning.price = "لطفا قیمت محصول را وارد نمایید";
  } else if (price < 1) {
    warning.price = "لطفا قیمت محصول را به درستی وارد نمایید";
  } else {
    delete warning.price;
  }
  if (!quantity) {
    warning.quantity = "لطفا تعداد موجودی محصول را وارد نمایید";
  } else if (quantity < 0) {
    warning.price = "تعداد محصولات نمیتواند کمتر از صفر باشد";
  } else {
    delete warning.quantity;
  }
  if (!description) {
    warning.description = "لطفا توضیحاتی درمورد محصول وارد نمایید";
  } else {
    delete warning.description;
  }

  if (!discount) {
    delete warning.discount;
  } else if (discount < 1 || discount > 99) {
    warning.discount = "مقدار تخفیف باید بین 1 تا 99 درصد باشد";
  }

  for (const item of specifications) {
    if (!item.value) {
      warning.specifications = "لطفا تمام مقادیر مورد نیاز وارد نمایید.";
    }
  }

  return warning;
}
