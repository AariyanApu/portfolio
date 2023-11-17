import { inputType, socialIconType } from '@/types/utilityTypes';

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
      className={`m-1 flex p-2  lg:m-2 lg:ml-0 ${width} all_animation  cursor-pointer items-center justify-center  rounded-lg bg-secondary-color shadow-md hover:text-primary-color hover:shadow-sm hover:shadow-primary-color lg:p-2`}
    >
      <a href={aHref}>{largeIcon}</a>
      <a href={aHref} className={textStyle}>
        {icon}
        {aText}
      </a>
    </div>
  );
}
