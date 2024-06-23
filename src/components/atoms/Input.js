function Input({
  name,
  type,
  label,
  placeholder,
  value,
  changeHandler,
  warning,
  required,
  touched,
}) {
  return (
    <div className="relative w-full">
      {label && (
        <label
          className={`${
            warning && required && touched
              ? "after:content-['*'] after:text-red-500 after:text-2xl after:absolute after:-top-2"
              : ""
          } block mb-1`}
        >
          {label}
        </label>
      )}
      <input
        className="w-full text-sm outline-none rounded-md h-12 px-2 dark:bg-zinc-900 border-2 dark:border-zinc-700 focus:border-blue-400 dark:focus:border-blue-300"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
}

export default Input;
