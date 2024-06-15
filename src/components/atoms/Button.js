function Button({ children, clickHandler, color, bgColor }) {
  return (
    <button
      className={`${bgColor} cursor-pointe ${color} transition-all w-full h-10 md:h-12 rounded-lg active:opacity-70 text-xl font-bold`}
      type="submit"
      onClick={clickHandler}
    >
      {children}
    </button>
  );
}

export default Button;
