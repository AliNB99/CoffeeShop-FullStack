"use client";

import { showContext } from "@/context/ShowContextProvider";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

function Overlay() {
  const { isShow, setIsShow } = useContext(showContext);
  const pathName = usePathname();

  const hiddenOverlay = () => {
    const data = Object.keys(isShow);
    const result = {};
    data.map((i) => (result[i] = false));
    setIsShow(result);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        hiddenOverlay();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    hiddenOverlay();
  }, [pathName]);

  return (
    <div
      onClick={hiddenOverlay}
      className={`${
        isShow.overlay ? "block" : "hidden"
      } fixed inset-0 bg-black/40 z-10 backdrop-blur`}
    ></div>
  );
}

export default Overlay;
