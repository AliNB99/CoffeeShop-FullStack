"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
// import EditorText from "../common/EditorText";

function InputForm({
  id,
  name,
  type,
  error,
  form,
  setForm,
  touched,
  setTouched,
  placeholder,
  textarea,
  className,
}) {
  const [showPass, setShowPass] = useState(false);

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
      <div className={`flex flex-col w-full ${!textarea && "h-[75px]"} gap-2`}>
        {textarea ? (
          <textarea
            id={id}
            className={`input-form h-52 ${className} ${
              error && touched[name]
                ? "dark:border-red-400 border-red-300"
                : "dark:border-zinc-700 focus:border-blue-400 dark:focus:border-blue-300"
            } `}
            name={name}
            value={form[name]}
            onBlur={fucusHandler}
            onChange={changeHandler}
            placeholder={placeholder}
          />
        ) : (
          <input
            id={id}
            type={type === "password" ? (showPass ? "text" : "password") : type}
            className={`input-form  ${className} h-12 ${
              error && touched[name]
                ? "dark:border-red-400 border-red-300"
                : "dark:border-zinc-700 focus:border-blue-400 dark:focus:border-blue-400"
            }`}
            name={name}
            value={form[name]}
            onBlur={fucusHandler}
            onChange={changeHandler}
            placeholder={placeholder}
            onWheel={(e) => e.target.blur()}
            min={0}
          />
        )}
        {/* show error text in under input */}
        {touched[name] ? (
          <span className="text-xs text-red-600 dark:text-red-400 mr-2 rounded-sm">
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
