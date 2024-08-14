import CountUp from "react-countup";

function CardAdminPanel({ bgColor, title, count }) {
  return (
    <div
      className={`w-full h-24 rounded-2xl flex items-center justify-between shadow-medium p-2 ${bgColor} text-white`}
    >
      <span className="font-medium max-w-32">{title}</span>
      <div className="h-16 flex items-center justify-center p-3 rounded-2xl">
        <span className="font-bold text-2xl">
          {<CountUp end={count} duration={3} />}
        </span>
      </div>
    </div>
  );
}

export default CardAdminPanel;
