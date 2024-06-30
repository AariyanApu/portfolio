"use client";

import cn from "@/libs/cn";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { FC } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPosts: number;
  perPage: any;
}
const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPosts,
  perPage,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const per_page: any = searchParams.get("per_page") ?? perPage;
  let allPages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / per_page); i++) {
    allPages.push(i);
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-x-2 ">
      <button
        className={cn("rounded-lg bg-sky-400 p-3 text-white", {
          "bg-slate-200": !hasPrevPage,
          "text-slate-400": !hasPrevPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) - 1}&per_page=${per_page}`,
          );
        }}
        disabled={!hasPrevPage}
      >
        <FaArrowLeft className="text-lg" />
      </button>

      {allPages
        .slice(Math.max(0, Number(page) - 3), Number(page) + 2)
        .map((item) => (
          <div
            key={item}
            className={cn(
              "cursor-pointer rounded-lg px-4 py-1.5 text-center text-sky-400 ring ring-sky-400 transition-colors duration-500 ease-in-out hover:bg-sky-400 hover:text-white",
              {
                "bg-sky-400": item === Number(page),
                "text-white": item === Number(page),
              },
            )}
            onClick={() => {
              router.push(`${pathname}?page=${item}&per_page=${per_page}`);
            }}
          >
            {item}
          </div>
        ))}

      <button
        className={cn("rounded-lg bg-sky-400 p-3 text-white", {
          "bg-slate-200": !hasNextPage,
          "text-slate-400": !hasNextPage,
        })}
        onClick={() => {
          router.push(
            `${pathname}?page=${Number(page) + 1}&per_page=${per_page}`,
          );
        }}
        disabled={!hasNextPage}
      >
        <FaArrowRight className="text-lg" />
      </button>
    </div>
  );
};

export default PaginationControls;
