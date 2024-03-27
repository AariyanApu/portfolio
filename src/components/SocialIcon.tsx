import { socialIconType } from '@/types/utilityTypes';
import Link from 'next/link';

export default function SocialIcon({
  aHref,
  icon,
  aText,
  largeIcon,
  textStyle,
  width,
}: socialIconType) {
  return (
    <div
      className={`m-1 flex p-2  lg:m-2 lg:ml-0 ${width} all_animation  cursor-pointer items-center justify-center  rounded-lg bg-secondary-color  hover:text-primary-color lg:p-2 shadow hover:shadow-primary-color  `}
    >
      <Link href={aHref!}>{largeIcon}</Link>
      <Link href={aHref!} className={textStyle}>
        {icon}
        {aText}
      </Link>
    </div>
  );
}
