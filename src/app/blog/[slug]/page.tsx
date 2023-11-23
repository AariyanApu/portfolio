// import { getData, getDataNoStore, getDataNoStoreLocal } from '@/utils/getData'
import { getDataNoStoreLocal } from '@/utils/getData';
import Image from 'next/image';

export default async function SingleBlog({ params }: any) {
  const { slug } = params;
  const data = await getDataNoStoreLocal(`posts/${slug}`);

  return (
    <div className={`mx-auto my-4 max-w-5xl px-4 lg:px-0 `}>
      <Image
        src={'/asset/react.jpg'}
        alt={''}
        height={800}
        width={800}
        className='w-full my-8 rounded object-cover object-center lg:h-96 lg:w-[700px]'
      />

      <div className='flex flex-col gap-y-6'>
        <div className=' mt-8 flex flex-row gap-x-20'>
          <p className=''> CREATED AT : {data.createdAt.substring(0, 10)}</p>
          <p className=''>VIEWED BY : {data.views} PEOPLE.</p>
        </div>
        <h1 className='text-2xl sm:text-3xl'>{data.title}</h1>
        <div
          className='md:text-sm lg:text-base prose text-slate-100  prose-headings:text-slate-50 prose-lg:text-slate-50'
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        />
      </div>
    </div>
  );
}
