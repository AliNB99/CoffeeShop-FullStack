"use client";

import { showContext } from "@/context/ShowContextProvider";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

function Overlay() {
  const { showElement, setShowElement } = useContext(showContext);
  const pathName = usePathname();

  const hiddenOverlay = () => {
    const data = Object.keys(showElement);
    const result = {};
    data.map((i) => (result[i] = false));
    setShowElement(result);
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
        showElement.overlay ? "block" : "hidden"
      } fixed inset-0 bg-black/40 z-10 backdrop-blur`}
    ></div>
  );
}

export default Overlay;
