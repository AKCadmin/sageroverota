"use client";
// import { CldImage } from "next-cloudinary";
import Image from "next/image";

export default function CustomImage({
  src,
  alt,
  className = "",
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width="500"
      height="500"
      crop={{
        type: "auto",
        source: true,
      }}
      className={className}
      unoptimized={true}
    />
  );
}
