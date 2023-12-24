import { blogPostType } from '@/types/dataTypes';
import Link from 'next/link';
import CloudImage from './utility/CloudImage';

export default function BlogPostCard({ item }: { item: blogPostType }) {
  return (
    <div
      key={item.id}
      className='mx-4 flex flex-col justify-start gap-x-16 rounded-md bg-secondary-color transition-all duration-500 ease-in-out hover:bg-[#132444] lg:flex-row xl:mx-0  overflow-hidden border-2 border-secondary-color hover:border-[#1d3666]'
    >
      <CloudImage
        src={item.imgUrl}
        alt={item.title}
        height={500}
        width={500}
        customStyles='h-72 lg:w-[550px] w-full rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80'
      />
      <div className=' mt-2 flex flex-col gap-y-2 pb-1 pl-4 sm:pl-8 px-4 sm:py-6 '>
        <p className='mt-4 text-sm'>{item.createdAt.substring(0, 10)}</p>
        <h1 className='text-3xl font-semibold md:text-2xl'>
          {item.title.substring(0, 50)}
        </h1>

        <div></div>
        <div
          className='md:text-sm lg:text-base'
          dangerouslySetInnerHTML={{
            __html: item.desc.substring(0, 100),
          }}
        />
        <Link
          href={`/blog/${item.slug}`}
          className='text-sm font-semibold text-primary-color pb-4 md:text-base lg:text-lg'
        >
          Read More...
        </Link>
      </div>
    </div>
  );
}
