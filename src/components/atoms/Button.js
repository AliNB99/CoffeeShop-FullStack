function Button({
  children,
  clickHandler,
  color,
  bgColor,
  type = "button",
  width,
  height = "h-12",
  fontSize = "text-lg",
}) {
  return (
    <button
      className={`${bgColor} ${width} ${color} ${fontSize} ${height} cursor-pointe transition-all flex items-center justify-center gap-1 px-3 rounded-lg active:opacity-70 font-medium`}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
