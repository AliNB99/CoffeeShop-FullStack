import Loader from "src/components/atoms/Loader";
import { LogoType } from "@/utils/svg";

function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-self-center">
      <div className="w-full flex flex-col items-center justify-center">
        <LogoType className="w-52 h-32 text-orange-300" />
        <Loader color="#fdba74" size={10} />
      </div>
    </div>
  );
}

export default Loading;
