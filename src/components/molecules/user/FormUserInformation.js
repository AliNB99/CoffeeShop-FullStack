"use client";

import { userInformation } from "@/constants/dashboard";
import { useCallback, useEffect, useState } from "react";

function FormUserInformation({ user, form, setForm }) {
  useEffect(() => {
    setForm(user);
  }, [user]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const createInput = useCallback(
    (item) => {
      switch (item.name) {
        case "bankInfo":
          return (
            <div className="relative user-info border-2 border-blue-100 dark:border-zinc-700">
              <div className="flex items-center min-w-32 gap-1">
                {item.icon}
                <h4 className="text-sm md:text-base">{item.title}:</h4>
              </div>
              <span className="absolute left-4 font-bold opacity-60">IR</span>
              <input
                name={item.name}
                onChange={changeHandler}
                value={form[item.name]}
                placeholder={`${item.title} خود را وارد نمایید`}
                className="w-full h-3/4 text-sm pr-3 pl-7 bg-inherit outline-none border-r-2 border-zinc-300 dark:border-zinc-700"
                type="number"
              />
            </div>
          );
        case "address":
          return (
            <div className="user-info border-2 border-blue-100 dark:border-zinc-700 md:col-span-2">
              <div className="flex items-center min-w-32 gap-1">
                {item.icon}
                <h4 className="text-sm md:text-base">{item.title}:</h4>
              </div>
              <textarea
                rows={3}
                name={item.name}
                value={form[item.name]}
                onChange={changeHandler}
                placeholder={`${item.title} خود را وارد نمایید`}
                className="w-full h-3/4 text-sm px-3 no-scrollbar bg-inherit outline-none border-r-2 border-zinc-300 dark:border-zinc-700"
                type="text"
              />
            </div>
          );
        default:
          return (
            <div className="user-info border-2 border-blue-100 dark:border-zinc-700">
              <div className="flex items-center min-w-32 gap-1">
                {item.icon}
                <h4 className="text-sm md:text-base">{item.title}:</h4>
              </div>
              <input
                name={item.name}
                value={form[item.name]}
                onChange={changeHandler}
                placeholder={`${item.title} خود را وارد نمایید`}
                className="w-full h-3/4 text-sm px-3 bg-inherit outline-none border-r-2 border-zinc-300 dark:border-zinc-700"
                type={item.type ? item.type : "text"}
              />
            </div>
          );
      }
    },
    [form]
  );

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userInformation.map((item) => createInput(item))}
      </div>
    </div>
  );
}

export default FormUserInformation;
