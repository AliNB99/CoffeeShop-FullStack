import useLoading from "src/hooks/useLoading";
import Loader from "./Loader";
import { useEffect } from "react";
import { setLoadingImg } from "@/utils/helper/helper";
import Image from "next/image";
import { Logo } from "@/utils/svg";

function CustomImage({ src, width, height, alt, className }) {
  const { isLoading, stopLoading } = useLoading({
    loadedImg: true,
  });
  useEffect(() => {
    setLoadingImg(src, stopLoading);
  }, []);

  return (
    <>
      <div className={`${isLoading.loadedImg ? "hidden" : ""}`}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
          onLoad={(img) => img.target.classList.remove("opacity-0")}
          className={className}
        />
      </div>

      {isLoading.loadedImg && <Logo className="w-1/2 h-1/2 opacity-20" />}
    </>
  );
}

export default CustomImage;
