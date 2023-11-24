import BlogCard from '@/components/BlogCard';
import { getDataNoStore } from '@/utils/getData';

export default async function Blog() {
  const data = await getDataNoStore('posts');
  return (
    <div className='mx-auto max-w-5xl flex flex-col gap-y-8 sm:gap-y-4 py-8'>
      {Array.isArray(data) &&
        data?.map((item) => <BlogCard item={item} key={item.id} />)}
    </div>
  );
}
