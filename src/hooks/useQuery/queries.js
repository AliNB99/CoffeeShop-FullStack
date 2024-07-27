import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import api from "src/configs/api";

export const useUsersData = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page") || 1;
  const searchValue = searchParams.get("search");
  const rowsPerPage = searchParams.get("rowsPerPage") || 5;

  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      api.get(
        `/admin/users?page=${page}&rowsPerPage=${rowsPerPage}&search=${searchValue}`
      ),
  });
};
