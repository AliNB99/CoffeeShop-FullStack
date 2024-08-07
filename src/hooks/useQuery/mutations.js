import { useMutation } from "@tanstack/react-query";
import { UploadClient } from "@uploadcare/upload-client";
import { signIn } from "next-auth/react";
import api from "src/configs/api";

export const useSubmitAuth = (action) => {
  if (action === "signup") {
    return useMutation({
      mutationFn: (form) => api.post("/auth/signup", form),
    });
  } else if (action === "signin") {
    return useMutation({
      mutationFn: async (form) =>
        await signIn("credentials", {
          ...form,
          redirect: false,
        }),
    });
  }
};

export const useSubmitProduct = (action) => {
  if (action === "addProduct") {
    return useMutation({
      mutationFn: (form) => api.post("/admin/products", form),
    });
  } else if (action === "editProduct") {
    return useMutation({
      mutationFn: ({ form, id }) =>
        api.patch("/admin/products", {
          action,
          form,
          id,
        }),
    });
  }
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
      api.patch(`/admin/users/${id}`, {
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
