'use client'
import { CldImage } from 'next-cloudinary'

export default function CloudImage({
  width,
  height,
  src,
  alt,
  customStyles,
}: {
  width: number
  height: number
  src: string
  alt: string
  customStyles: string
}) {
  return (
    <CldImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={customStyles}
    />
  )
}
