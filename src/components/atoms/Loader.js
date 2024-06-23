"use client";

import { BeatLoader } from "react-spinners";

function Loader({ color, size }) {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <BeatLoader color={color} size={size} />
    </div>
  );
}

export default Loader;
