"use client";

import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import TextEditor from "./Editor";
import { toast } from "react-toastify";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddSiglePost() {
  // Form Validation with Yup
  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    slug: yup.string().required("Slug is required"),
    desc: yup.string().required("Description is required"),
    imgUrl: yup.string().required("Image URL is required"),
  });

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = async (values: any, { resetForm }: any) => {
    // send post request to the server
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
  };

  interface UploadResult {
    info: {
      public_id: string;
    };
  }

  // Handeler for next-cloudinary image upload, it will send back image url
  const handleUpload = (result: UploadResult) => {
    // setImgUrl(result.info.public_id);
    setImgUrl(result.info.public_id);
  };

  return (
    <Formik
      initialValues={{
        title: "",
        slug: "",
        imgUrl: "",
        desc: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <Form className="mx-auto mb-20 flex w-[900px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4">
          <h1 className="text-3xl ">Add Blog</h1>

          <CldUploadButton
            uploadPreset="gbdc_blogs"
            className="rounded-md bg-sky-600 px-4 py-2"
            onUpload={(result: any) => {
              const uploadResult = result as UploadResult;
              setFieldValue("imgUrl", uploadResult.info.public_id);
              handleUpload(uploadResult);
            }}
          />
          <Field
            name="title"
            placeholder="Enter Blog Title...."
            className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4 py-2"
          />
          <ErrorMessage name="title" component="div" className="text-red-500" />

          <Field
            name="slug"
            placeholder="Enter Blog Slug...."
            className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4 py-2"
          />
          <ErrorMessage name="slug" component="div" className="text-red-500" />
          {/* render from another file */}
          <TextEditor
            input={{ desc: "" }}
            setInput={(input: any) => setFieldValue("desc", input.desc)}
          />
          <ErrorMessage name="desc" component="div" className="text-red-500" />

          <Field type="hidden" name="imgUrl" value={imgUrl} />
          <ErrorMessage
            name="imgUrl"
            component="div"
            className="text-red-500"
          />
        </Form>
      )}
    </Formik>
  );
}
