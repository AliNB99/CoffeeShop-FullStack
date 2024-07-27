import { useMutation } from "@tanstack/react-query";
import { UploadClient } from "@uploadcare/upload-client";
import { signIn } from "next-auth/react";
import api from "src/configs/api";

export const useSubmitSignup = () => {
  return useMutation({
    mutationFn: (form) => api.post("/auth/signup", form),
  });
};

export const useSubmitSignin = () => {
  return useMutation({
    mutationFn: async (form) =>
      await signIn("credentials", {
        ...form,
        redirect: false,
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

export const useChangeAvatarUser = (queryClient) => {
  return useMutation({
    mutationFn: ({ id, img }) =>
      api.patch(`/admin/users/${id}`, {
        action: "changeAvatar",
        img,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useDeleteUser = (queryClient) => {
  return useMutation({
    mutationFn: (id) => api.delete(`/admin/users/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useChangeUser = (queryClient) => {
  return useMutation({
    mutationFn: ({ id, img, action }) =>
      api.patch(`/admin/users/${id}`, {
        action,
        img,
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useDeleteSomeUser = (queryClient) => {
  return useMutation({
    mutationFn: ({ ids, selectedKeys }) =>
      api.delete(`/admin/users`, { data: { ids, selectedKeys } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};

export const useChangeSomeUser = (queryClient) => {
  return useMutation({
    mutationFn: ({ ids, selectedKeys }) =>
      api.patch(`/admin/users`, { data: { ids, selectedKeys } }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
