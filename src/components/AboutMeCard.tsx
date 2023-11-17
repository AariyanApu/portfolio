import { RightIcon } from '@/utils/icons';

export default function AboutMeCard({ skill }: { skill: string }) {
  return (
    <div className='mb-1 flex flex-row gap-1'>
      <RightIcon /> <span className='text-sm text-[#8892b0]'>{skill}</span>
    </div>
  );
}
