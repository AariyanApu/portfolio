import BlogCard from "@/components/BlogCard";
import { getDataNoStore } from "@/utils/getData";

export default async function Blog() {
  const data = await getDataNoStore("posts");
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-y-8 py-8 sm:gap-y-4">
      {Array.isArray(data) &&
        data?.map((item) => <BlogCard item={item} key={item.id} />)}
    </div>
  );
}
