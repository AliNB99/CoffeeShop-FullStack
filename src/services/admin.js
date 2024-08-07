import api from "src/configs/api";


export const editProductService = (body, _id) => {
  return api.patch(`/admin/products`, {
    ...body,
    _id,
  });
};
