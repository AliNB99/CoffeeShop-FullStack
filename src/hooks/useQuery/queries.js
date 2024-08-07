import { keepPreviousData, useQuery } from "@tanstack/react-query";
import api from "src/configs/api";

export const useGetData = ({ route, page, rowsPerPage, searchValue }) => {
  return useQuery({
    queryKey: [route, page],
    queryFn: () =>
      api.get(
        `/admin/${route}?page=${page}&rowsPerPage=${rowsPerPage}&search=${searchValue}`
      ),
    placeholderData: keepPreviousData,
  });
};

export const useGetCommentsProduct = (productId) => {
  return useQuery({
    queryKey: ["comment", productId],
    queryFn: () => api.get(`/products/comment/${productId}`),
  });
};
