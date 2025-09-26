"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

export default function SmartImage({ src, alt, className, ...rest }: Props) {
  // Always use native <img> to support HEIC and avoid Next/Image width/sizes constraints
  return <img src={src} alt={alt} className={className} {...rest} />;
}
