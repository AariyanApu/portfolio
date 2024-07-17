"use client";

import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import useSWR, { SWRResponse } from "swr";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Loading from "../utility/Loading";
import { fetcher } from "@/utils/getData";
import { slugify } from "@/hooks/AddSlugify";
import { UploadResult, fetchData } from "@/types/dataTypes";
import { validationSchemaForProject } from "@/hooks/validationSchema";
import { deletePost } from "@/hooks/deletePost";

export default function DashboardProjects() {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { data, error, isLoading, mutate }: SWRResponse<fetchData, any> =
    useSWR("/api/projects", fetcher);

  const handleUpload = (result: UploadResult, setFieldValue: any) => {
    setFieldValue("imgUrl", result.info.public_id);
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    try {
      await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify({
          title: values.title,
          imgUrl: values.imgUrl,
          description: values.description,
          projectLink: values.projectLink,
          codeLink: values.codeLink,
          tags: values.tags,
          slug: slugify(values.title),
        }),
      });
      setIsFormSubmitted(true);
      resetForm();
      toast.success("Your Project was posted Successfully", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error posting project:", error);
    } finally {
      mutate();
      setLoading(false);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load projects</div>;

  return (
    <div className="w-full px-8">
      <div className="flex w-full flex-row justify-between px-10">
        <div>
          <Formik
            initialValues={{
              title: "",
              imgUrl: "",
              description: "",
              projectLink: "",
              codeLink: "",
              tags: [] as string[],
            }}
            validationSchema={validationSchemaForProject}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="mt-10 flex w-96 flex-col">
                <p className="py-3 text-2xl text-primary-color">
                  Add New Project Here!
                </p>

                <Field
                  name="title"
                  placeholder="Title"
                  className="input_style"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="input_style h-36"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  name="projectLink"
                  placeholder="Project Link"
                  className="input_style"
                />
                <ErrorMessage
                  name="projectLink"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  name="codeLink"
                  placeholder="Code Link"
                  className="input_style"
                />
                <ErrorMessage
                  name="codeLink"
                  component="div"
                  className="text-red-500"
                />

                <Field
                  name="tags"
                  placeholder="Tags (comma separated)"
                  className="input_style"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("tags", e.target.value.split(","))
                  }
                />
                <ErrorMessage
                  name="tags"
                  component="div"
                  className="text-red-500"
                />

                {/* You Need to add your upload preset in next-cloudinary */}

                <CldUploadButton
                  uploadPreset="projects" // Your upload preset goes here
                  className="button_style mt-2"
                  onUpload={(result: any) =>
                    handleUpload(result, setFieldValue)
                  }
                />
                <ErrorMessage
                  name="imgUrl"
                  component="div"
                  className="text-red-500"
                />

                <button type="submit" className="button_style my-5 w-full">
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
          {isFormSubmitted && (
            <p className="text-primary-color">
              Project submitted successfully!
            </p>
          )}
        </div>
        <div className="mt-10">
          <h1 className="text-center text-2xl text-primary-color">
            All Projects
          </h1>
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
                      onClick={() =>
                        deletePost(`projects/${project.slug}`, mutate)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
