function TitleSection({ title, subTitle }) {
  return (
      <div className="font-Morabba text-zinc-700 dark:text-white">
        <h1 className="font-medium text-xl sm:text-2xl lg:text-5xl">{title}</h1>
        <p className="text-base sm:text-lg lg:text-3xl">{subTitle}</p>
      </div>    
  );
}

export default TitleSection;
