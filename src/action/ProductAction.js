"use server";

export const addProductAction = (formData) => {
  const item = formData.get("images");
  console.log(item);
};
