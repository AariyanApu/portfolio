"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { slugify } from "@/hooks/AddSlugify";
import { UploadResult } from "@/types/dataTypes";
import { validationSchemaForProject } from "@/hooks/validationSchema";
import DeleteProject from "./DeleteProject";
import { mutate } from "swr";

export default function DashboardProjects() {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
      mutate("/api/projects");
      setLoading(false);
    }
  };

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
        {/* Delete Project */}
        <DeleteProject />
      </div>
    </div>
  );
}
