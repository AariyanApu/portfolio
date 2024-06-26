"use client";

import { CldUploadButton } from "next-cloudinary";
import { ChangeEvent, useState } from "react";
import TextEditor from "../Editor";
import { toast } from "react-toastify";

export default function AddSiglePost() {
  const [input, setInput] = useState({
    title: "",
    imgUrl: "",
    desc: "",
    slug: "",
  });

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    // send post request to the server
    await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title: input.title,
        slug: slugify(input.slug),
        imgUrl: input.imgUrl,
        desc: input.desc,
      }),
    });

    //clear form
    setInput({
      title: "",
      imgUrl: "",
      desc: "",
      slug: "",
    });

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

  // Handeler for next-cloudinary image upload, it will send back image url
  const handleUpload = (result: any) => {
    // setImgUrl(result.info.public_id);
    setInput({ ...input, imgUrl: result.info.public_id });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-20 flex w-[900px] flex-col items-start justify-start gap-4 rounded-md border border-sky-400 p-4"
    >
      <h1 className="text-3xl ">Add Blog</h1>

      <CldUploadButton
        uploadPreset="gbdc_blogs"
        className=" rounded-md  bg-sky-600 px-4 py-2"
        onUpload={handleUpload}
      />
      <input
        placeholder="Enter Blog Title...."
        className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4  py-2"
        onChange={(e) => setInput({ ...input, title: e.target.value })}
        type="text"
        value={input.title}
      />
      <input
        placeholder="Enter Blog Slug...."
        className="mt-4 w-full rounded-md border border-sky-400 bg-background-color px-4  py-2"
        onChange={(e) => setInput({ ...input, slug: e.target.value })}
        type="text"
        value={input.slug}
      />

      <TextEditor input={input} setInput={setInput} />
    </form>
  );
}

//TODO:: Add Form Validation
