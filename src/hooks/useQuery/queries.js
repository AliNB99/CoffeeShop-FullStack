import { useQuery } from "@tanstack/react-query";
import api from "src/configs/api";

export const useUsersData = (page, rowsPerPage, searchValue) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: () =>
      api.get(
        `/admin/users?page=${page}&rowsPerPage=${rowsPerPage}&search=${searchValue}`
      ),
  });
};
