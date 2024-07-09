"use client";

import { BarLoader, BeatLoader } from "react-spinners";

function Loader({ color, size, model = "beat" }) {
  return (
    <div className="w-full flex items-center justify-center p-4">
      {model === "beat" ? (
        <BeatLoader color={color} size={size} />
      ) : (
        <BarLoader color={color} size={size} />
      )}
    </div>
  );
}

export default Loader;
