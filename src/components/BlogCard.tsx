import { blogPostType } from '@/types/dataTypes';
import DOMPurify from 'isomorphic-dompurify';
import CloudImage from './utility/CloudImage';

export default function BlogCard({ item }: { item: blogPostType }) {
  const htmlContent = `${item.desc.substring(
    0,
    100
  )} <a class='text-sm font-semibold hover:text-primary-color transition-colors duration-500 ease-in-out pb-4 md:text-base lg:text-lg' href="/blog/${
    item.slug
  }">...Read More</a>`;
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <div
      key={item.id}
      className='mx-4 flex flex-col justify-start gap-x-16 rounded-md bg-secondary-color transition-all duration-500 ease-in-out hover:bg-[#132444] lg:flex-row xl:mx-0  overflow-hidden border border-secondary-color hover:border-[#1d3666]'
    >
      <CloudImage
        src={item.imgUrl}
        alt={item.title}
        height={500}
        width={500}
        customStyles='h-72 lg:w-[550px] w-full rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80'
      />
      <div className=' my-2 flex flex-col gap-y-2 pb-1 pl-4 sm:pl-8 px-4 sm:py-6 '>
        <p className='mt-4 text-sm'>{item.createdAt.substring(0, 10)}</p>
        <h1 className='lg:text-3xl text-xl font-semibold md:text-2xl'>
          {item.title.substring(0, 50)}
        </h1>
        <div
          className='md:text-sm lg:text-base'
          dangerouslySetInnerHTML={{
            __html: sanitizedHtml,
          }}
        />
      </div>
    </div>
  );
}
