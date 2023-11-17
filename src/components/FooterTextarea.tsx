import { inputType } from '@/types/utilityTypes';

const FooterTextarea = ({ value, placeholder, onChange }: inputType) => {
  return (
    <div className=' my-3 inline-flex  w-full  cursor-pointer items-center justify-center rounded-lg bg-secondary-color '>
      <textarea
        value={value}
        placeholder={placeholder}
        required
        onChange={onChange}
        className=' w-full rounded-lg bg-secondary-color p-4   text-left text-sm leading-normal text-slate-color-lighter placeholder-slate-color focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-color  '
      />
    </div>
  );
};

export default FooterTextarea;
