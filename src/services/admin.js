import api from "src/configs/api";

export const addProductService = (body) => {
  return api.post("/admin/products", {
    body,
  });
};

export const editProductService = (body, _id) => {
  return api.patch(`/admin/products`, {
    ...body,
    _id,
  });
};
