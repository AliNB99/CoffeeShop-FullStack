import CountUp from "react-countup";

function CardAdminPanel({ bgColor, title, count }) {
  return (
    <div
      className={`w-full h-24 rounded-2xl flex items-center justify-between shadow-medium py-2 px-3 ${bgColor} text-white`}
    >
      <span className="font-medium max-w-36">{title}</span>
      <div className="h-16 flex items-center justify-center">
        <span className="font-bold text-2xl">
          {<CountUp end={count} duration={3} />}
        </span>
      </div>
    </div>
  );
}

export default CardAdminPanel;
