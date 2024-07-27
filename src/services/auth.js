import api from "src/configs/api";

export const signUpService = async (form) => {
  try {
    return await api.post("/auth/signup", form);
  } catch (error) {
    return error.response;
  }
};
