function TitlePage({ borderColor, color, children }) {
  return (
    <div
      className={`${color} border-b-2 ${borderColor} text-xl font-bold lg:w-3/4 pb-3 pr-3`}
    >
      <h1>{children}</h1>
    </div>
  );
}

export default TitlePage;
