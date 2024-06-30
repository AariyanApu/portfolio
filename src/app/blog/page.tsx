import BlogCard from "@/components/BlogCard";
import PaginationControls from "@/components/PaginationControl";
import { SearchParamsProps, blogPostType } from "@/types/dataTypes";
import { getDataNoStore } from "@/utils/getData";

export default async function Blog({ searchParams }: SearchParamsProps) {
  // Fetch data from the server
  const data: blogPostType[] = await getDataNoStore("posts");

  // Pagination logic
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "8";
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
