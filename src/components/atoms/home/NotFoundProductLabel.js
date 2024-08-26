function NotFoundProductLabel({ label }) {
  return (
    <div className="container">
      <div className="text-center mt-20 p-2 rounded-lg bg-red-100 text-red-400">
        <h1 className="text-xl lg:text-2xl font-bold">{label}</h1>
      </div>
    </div>
  );
}

export default NotFoundProductLabel;
