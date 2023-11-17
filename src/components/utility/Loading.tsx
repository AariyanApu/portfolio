import Image from 'next/image';

export default function Loading() {
  return (
    <Image
      alt='loading......'
      height={500}
      width={500}
      className='mx-auto mb-60 mt-28 h-44 w-44 animate-pulse  transition duration-300'
      src='/android-chrome-384x384.png'
    />
  );
}
