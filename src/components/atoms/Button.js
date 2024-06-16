function Button({ children, clickHandler, color, bgColor, type, width }) {
  return (
    <button
      className={`${bgColor} ${width} ${color} cursor-pointe transition-all flex items-center justify-center gap-1 h-12 px-3 rounded-lg active:opacity-70 text-lg font-bold`}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
