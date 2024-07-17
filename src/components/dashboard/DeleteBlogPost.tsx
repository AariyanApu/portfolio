"use client";

import useSWR, { SWRResponse } from "swr";
import Loading from "../utility/Loading";
import { deletePost } from "@/hooks/deletePost";

export default function DeleteBlogPost() {
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args);
    return res.json();
  };
  const { data, error, mutate }: SWRResponse<any, any> = useSWR(
    "/api/posts",
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <Loading />;

  return (
    <div>
      {Array.isArray(data) &&
        data?.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-start gap-x-8 p-4"
          >
            <p>{item.title.substring(0, 60)}</p>
            <button
              onClick={() => deletePost(`posts/${item.slug}`, mutate)}
              className=" rounded-md bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
