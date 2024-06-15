"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function InputForm({
  name,
  type,
  error,
  form,
  setForm,
  touched,
  setTouched,
  placeholder,
  textarea,
}) {
  const [showPass, setShowPass] = useState(false);
  console.log([name, form[name]]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };
  const fucusHandler = (e) => {
    const { name } = e.target;
    setTouched((items) => ({ ...items, [name]: true }));
  };

  return (
    <div className="relative">
      <div className="flex flex-col w-full gap-2">
        {textarea ? (
          <textarea
            className={`w-full h-52 outline-none rounded-lg bg-white dark:bg-zinc-900 px-3 border-2 shadow-normal p-2 ${
              error && touched[name]
                ? "dark:border-red-400 border-red-300"
                : "dark:border-zinc-700"
            }`}
            name={name}
            value={form[name]}
            onBlur={fucusHandler}
            onChange={changeHandler}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type === "password" ? (showPass ? "text" : "password") : type}
            className={`w-full h-12 md:h-14 outline-none rounded-lg bg-white dark:bg-zinc-900 px-3 border-2 shadow-normal p-2 ${
              error && touched[name]
                ? "dark:border-red-400 border-red-300"
                : "dark:border-zinc-700"
            }`}
            name={name}
            value={form[name]}
            onBlur={fucusHandler}
            onChange={changeHandler}
            placeholder={placeholder}
          />
        )}
        {/* show error text in under input */}
        {touched[name] ? (
          <span className="text-xs md:text-sm text-red-600 dark:text-red-400 mr-2 rounded-sm">
            {error}
          </span>
        ) : null}
      </div>

      {/* icon input password for change type */}
      <div className="absolute left-2 top-4 text-zinc-300">
        {type === "password" &&
          (showPass ? (
            <EyeIcon onClick={() => setShowPass(!showPass)} />
          ) : (
            <EyeSlashIcon onClick={() => setShowPass(!showPass)} />
          ))}
      </div>
    </div>
  );
}

export default InputForm;
