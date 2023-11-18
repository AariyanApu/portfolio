import { projectIconType } from '@/types/dataTypes';

export default function ProjectIconCard({ link, Icon }: projectIconType) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className=' all_animation flex h-[50px] w-[50px] cursor-pointer items-center  justify-center rounded-full bg-navy-color text-center  text-slate-color-lighter hover:bg-secondary-color hover:text-primary-color '
    >
      <Icon />
    </a>
  );
}
