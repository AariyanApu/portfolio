import { deletePost } from "@/hooks/deletePost";
import { ProjectProps } from "@/types/dataTypes";
import { CldImage } from "next-cloudinary";
import React from "react";
import useSWR, { SWRResponse } from "swr";
import Loading from "../utility/Loading";
import { fetcher } from "@/hooks/fetchData";

export default function DeleteProject() {
  const { data, error, isLoading, mutate }: SWRResponse<ProjectProps, any> =
    useSWR("/api/projects", fetcher);

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load projects</div>;

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl text-primary-color">All Projects</h1>
      <div className="flex flex-col">
        {Array.isArray(data) &&
          data?.reverse().map((project) => (
            <div
              key={project.id}
              className="my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5"
            >
              <h1 className="text-xl">{project.title}</h1>
              <h1>{project.tags.map((tag: string) => `#${tag} `)}</h1>
              <h1>{project.description}</h1>
              <h1>{project.projectLink}</h1>
              <h1>{project.codeLink}</h1>

              <CldImage
                width={300}
                height={300}
                src={project.imgUrl}
                alt={project.title}
                className="h-20 w-20 p-1"
              />
              <div className="flex w-full gap-x-5">
                <button
                  className="button_style mt-2"
                  onClick={() => deletePost(`projects/${project.slug}`, mutate)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
