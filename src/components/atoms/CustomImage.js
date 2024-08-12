"use client";

import useLoading from "src/hooks/useLoading";
import { useEffect } from "react";
import { setLoadingImg } from "@/utils/helper/helper";
import Image from "next/image";
import { Logo } from "@/utils/svg";

function CustomImage({
  src,
  width,
  height,
  layout,
  sizes,
  alt,
  objectFit,
  className,
}) {
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
          objectFit={objectFit}
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout={layout}
          sizes={sizes}
          loading="lazy"
          onLoad={(img) => img.target.classList.remove("opacity-0")}
          className={className}
        />
      </div>

      {isLoading.loadedImg && <Logo className="w-1/2 h-1/2 opacity-30" />}
    </>
  );
}

export default CustomImage;
