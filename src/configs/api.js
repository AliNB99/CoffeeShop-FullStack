import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (res) => {
    console.log(res);
    if (res.data.message) {
      toast.success(res.data.message);
    } else if (res.data.error) {
      toast.error(res.data.error);
      return Promise.reject();
    }
    return res;
  },
  (err) => {
    toast.error(err.message);
    return Promise.reject(err);
  }
);

export default api;
