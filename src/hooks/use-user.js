import { useQuery } from "react-query";
import axiosService from "@/axios";

const useUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosService.get("/user/me");
      return response.data;
    },
    enabled: !!localStorage.getItem("token"),
  });
  return { data, isLoading, error };
};

export default useUser;
