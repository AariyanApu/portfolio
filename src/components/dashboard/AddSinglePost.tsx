"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import TextEditor from "./Editor";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UploadResult } from "@/types/dataTypes";
import { slugify } from "@/hooks/AddSlugify";
import { validationSchemaForPost } from "@/hooks/validationSchema";
import DeleteBlogPost from "./DeleteBlogPost";
import { mutate } from "swr";

export default function AddSiglePost() {
  // Make this state sepate for cloudinary
  const [imgUrl, setImgUrl] = useState("");

  // Handeler for form submit
  const handleSubmit = async (values: any, { resetForm }: any) => {
    // send post request to the server
    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title: values.title,
          slug: slugify(values.slug),
          imgUrl: values.imgUrl,
          desc: values.desc,
        }),
      });

      //clear form
      resetForm();

      // Send Susscess alert
      toast.success("Your Blog is posted Susscessfully", {
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
      console.error("Error Posting Blog", error);
    } finally {
      mutate("/api/posts");
    }
  };

  // Handeler for next-cloudinary image upload, it will send back imgUrl
  const handleUpload = (result: UploadResult) => {
    setImgUrl(result.info.public_id);
  };

  return (
    <div className="flex flex-row">
      <Formik
        initialValues={{
          title: "",
          slug: "",
          imgUrl: "",
          desc: "",
        }}
        validationSchema={validationSchemaForPost}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="mx-auto mb-20 flex w-[900px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4">
            <h1 className="text-3xl ">Add Blog</h1>

            {/* You have to add your upload preset from Cloudinary */}
            <CldUploadButton
              uploadPreset="gbdc_blogs" // Add your upload preset here
              className="rounded-md bg-sky-600 px-4 py-2"
              onUpload={(result: any) => {
                const uploadResult = result as UploadResult;
                setFieldValue("imgUrl", uploadResult.info.public_id);
                handleUpload(uploadResult);
              }}
            />

            <Field type="hidden" name="imgUrl" value={imgUrl} />
            <ErrorMessage
              name="imgUrl"
              component="div"
              className="text-red-500"
            />

            {/* Prebuilt Form Field from Cloudinary */}
            <Field
              name="title"
              placeholder="Enter Blog Title...."
              className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4 py-2"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />

            <Field
              name="slug"
              placeholder="Enter Blog Slug...."
              className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4 py-2"
            />
            <ErrorMessage
              name="slug"
              component="div"
              className="text-red-500"
            />
            {/* render from another file */}
            <TextEditor
              input={{ desc: "" }}
              setInput={(input: any) => setFieldValue("desc", input.desc)}
            />
            <ErrorMessage
              name="desc"
              component="div"
              className="text-red-500"
            />
          </Form>
        )}
      </Formik>
      <DeleteBlogPost />
    </div>
  );
}
