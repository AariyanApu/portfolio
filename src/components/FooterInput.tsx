import { inputType } from '@/types/utilityTypes';

export default function FooterInput({
  value,
  placeholder,
  onChange,
}: inputType) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      required
      onChange={onChange}
    />
  );
}
