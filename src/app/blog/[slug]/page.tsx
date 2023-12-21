import CloudImage from '@/components/utility/CloudImage';
import { getDataNoStore } from '@/utils/getData';
import Image from 'next/image';

export default async function SingleBlog({ params }: any) {
  const { slug } = params;
  const data = await getDataNoStore(`posts/${slug}`);

  return (
    <div className={`mx-auto my-4 max-w-6xl px-4 lg:px-0 `}>
      <CloudImage
        src={data.imgUrl}
        alt={data.title}
        height={800}
        width={800}
        customStyles='w-full my-8 rounded object-cover object-center lg:h-96 lg:w-[800px]'
      />

      <div className='flex flex-col gap-y-6 w-full'>
        <div className=' mt-8 flex flex-row gap-x-20'>
          <p className=''> CREATED AT : {data.createdAt.substring(0, 10)}</p>
          <p className=''>VIEWED : {data.views} TIMES.</p>
        </div>
        <h1 className='text-2xl sm:text-4xl font-semibold'>{data.title}</h1>
        <div
          className='md:text-sm lg:text-base prose-base    prose-slate prose-invert prose-a:text-sky-400 hover:prose-a:text-sky-500 prose-img:rounded-md prose-img:shadow-md prose-img:overflow-hidden prose-img:object-cover prose-img:object-center  prose-img:my-8 prose-img:w-[800px] prose-img:h-96'
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        />
      </div>
    </div>
  );
}
