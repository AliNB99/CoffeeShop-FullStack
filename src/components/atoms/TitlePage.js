function TitlePage({ borderColor, color, children }) {
  return (
    <div
      className={`${color} border-b-2 ${borderColor} text-xl font-bold w-full pb-3 pr-3`}
    >
      <h1>{children}</h1>
    </div>
  );
}

export default TitlePage;
