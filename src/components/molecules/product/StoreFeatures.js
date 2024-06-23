function StoreFeatures({ children, icon }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p className="text-xs xl:text-sm text-zinc-700 dark:text-gray-100">
        {children}
      </p>
    </div>
  );
}

export default StoreFeatures;
