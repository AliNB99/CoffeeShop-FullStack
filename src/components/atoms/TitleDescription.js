import { Logo } from "@/utils/svg";

function TitleDescription({ title }) {
  return (
    <div className="text-orange-300 w-2/3 flex items-center gap-2 border-b-2 p-2 border-orange-300 font-Morabba text-2xl font-medium">
      <Logo />
      <h4 className="text-xl sm:text-3xl">{title}</h4>
    </div>
  );
}

export default TitleDescription;
