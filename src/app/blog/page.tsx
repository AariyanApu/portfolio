import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/utils/data';

export default function Blog() {
  return (
    <div className='mx-auto max-w-5xl flex flex-col gap-y-8 sm:gap-y-4 py-8'>
      {blogPosts?.map((item) => (
        <BlogCard item={item} key={item.id} />
      ))}
    </div>
  );
}
