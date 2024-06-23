function ProsAndCons({ title, list, color, icon }) {
  return (
    <div>
      <div className={`flex items-center gap-3 ${color} text-xl mb-4`}>
        {icon}
        <h4 className="font-bold">{title}</h4>
      </div>
      {list.length ? (
        <ul className="pr-6 space-y-3 mt-3 list-disc">
          {list.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      ) : (
        <h1 className="bg-blue-100/30 rounded-lg text-center p-6 font-bold text-zinc-500 dark:text-white text-lg">
          موردی ثبت نشده است
        </h1>
      )}
    </div>
  );
}

export default ProsAndCons;
