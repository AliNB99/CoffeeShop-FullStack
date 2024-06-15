"use client";

import { BeatLoader } from "react-spinners";

function Loader({ color, size }) {
  return (
    <div className="w-full flex items-center justify-center">
      <BeatLoader color={color} size={size} />
    </div>
  );
}

export default Loader;
