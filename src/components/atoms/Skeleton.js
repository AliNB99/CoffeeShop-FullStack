const Skeleton = ({ width = "100%", height = "20px", className }) => {
  return (
    <div
      className={`relative overflow-hidden bg-zinc-300 dark:bg-zinc-700 rounded-lg ${className}`}
      style={{ width, height }}
    >
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-zinc-400/50 dark:via-zinc-600 to-transparent animate-wave"></div>
    </div>
  );
};

export default Skeleton;
