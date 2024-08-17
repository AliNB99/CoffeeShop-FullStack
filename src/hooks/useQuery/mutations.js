import { useMutation } from "@tanstack/react-query";
import { UploadClient } from "@uploadcare/upload-client";
import { signIn } from "next-auth/react";
import api from "src/configs/api";

export const useSubmitSignup = () => {
  return useMutation({
    mutationFn: (form) => api.post("/auth/signup", form),
  });
};

export const useSubmitSignIn = () => {
  return useMutation({
    mutationFn: async (form) =>
      await signIn("credentials", {
        ...form,
        redirect: false,
      }),
  });
};

export const useSubmitAddProduct = () => {
  return useMutation({
    mutationFn: (form) => api.post("/admin/products", form),
  });
};

export const useSubmitEditProduct = () => {
  return useMutation({
    mutationFn: ({ form, id }) =>
      api.patch("/admin/products", {
        action: "editProduct",
        form,
        id,
      }),
  });
};

export const useAddImages = () => {
  const client = new UploadClient({
    publicKey: process.env.NEXT_PUBLIC_API_KEY,
  });

  return useMutation({
    mutationFn: async (file) => await client.uploadFile(file),
  });
};

export const useChangeDataAvatarUser = (queryClient) => {
  return useMutation({
    mutationFn: ({ id, img }) =>
      api.patch(`/user/${id}`, {
        action: "changeAvatar",
        img,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useDeleteData = ({ queryClient, route }) => {
  return useMutation({
    mutationFn: (id) => api.delete(`/admin/${route}/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [route] }),
  });
};

export const useChangeData = ({ queryClient, route }) => {
  return useMutation({
    mutationFn: ({ id, img, action, status }) =>
      api.patch(`/admin/${route}/${id}`, {
        action,
        img,
        status,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [route] }),
  });
};

export const useDeleteSomeData = ({ queryClient, route }) => {
  return useMutation({
    mutationFn: ({ ids, selectedKeys }) =>
      api.delete(`/admin/${route}`, { data: { ids, selectedKeys } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [route] }),
  });
};

export const useChangeSomeData = ({ queryClient, route }) => {
  return useMutation({
    mutationFn: ({ ids, action, selectedKeys, statusValue }) =>
      api.patch(`/admin/${route}`, { ids, selectedKeys, action, statusValue }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [route] }),
  });
};

export const useSubmitComment = () => {
  return useMutation({
    mutationFn: ({ user, comment, product }) =>
      api.post(`/products/comment/${product._id}`, {
        data: { user, comment, product },
      }),
  });
};

export const useChangeUserInformation = () => {
  return useMutation({
    mutationFn: ({ id, form, action }) =>
      api.patch(`/user/${id}`, {
        action,
        form,
        id,
      }),
  });
};
