import BlogCard from "@/components/BlogCard";
import PaginationControls from "@/components/PaginationControl";
import { getData } from "@/hooks/fetchData";
import { SearchParamsProps, blogPostType } from "@/types/dataTypes";

export default async function Blog({ searchParams }: SearchParamsProps) {
  // Await searchParams in Next.js 15
  const resolvedSearchParams = await searchParams;
  
  // Fetch data from the server
  const data: blogPostType[] = await getData("posts");

  // Pagination logic
  const page = resolvedSearchParams["page"] ?? "1";
  const per_page = resolvedSearchParams["per_page"] ?? "8";
  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  // Filter data based on pagination
  const filterData = data?.reverse().slice(start, end);
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-y-8 py-8 sm:gap-y-4">
      {filterData?.map((item) => <BlogCard item={item} key={item.id} />)}

      {/* PaginationControls */}
      <PaginationControls
        hasNextPage={end < data?.length}
        hasPrevPage={start > 0}
        totalPosts={data?.length}
        perPage={per_page}
      />
    </div>
  );
}
