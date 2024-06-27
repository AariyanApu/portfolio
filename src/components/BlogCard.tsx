import { blogPostType } from "@/types/dataTypes";
import DOMPurify from "isomorphic-dompurify";
import CloudImage from "./utility/CloudImage";

export default function BlogCard({ item }: { item: blogPostType }) {
  // Add a read more link to the blog card
  const htmlContent = `${item.desc.substring(0, 150)} <a class='text-sm font-semibold hover:text-primary-color transition-colors duration-500 ease-in-out md:text-base lg:text-lg' href="/blog/${item.slug}">...Read More</a>`;

  // sanitizedHtml to prevent dangerouslySetInnerHTML
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <div
      key={item.id}
      className="mx-4 flex flex-col justify-start gap-x-6 overflow-hidden rounded-md border border-secondary-color bg-secondary-color transition-all duration-500 ease-in-out  hover:border-[#1d3666] hover:bg-[#132444] lg:flex-row xl:mx-0"
    >
      {/* image component of cloudinary */}
      <CloudImage
        src={item.imgUrl}
        alt={item.title}
        height={500}
        width={500}
        customStyles="h-auto w-full rounded-t-md object-cover opacity-95 transition-opacity duration-300 ease-in-out hover:opacity-100 sm:rounded-s-md sm:rounded-tr-none md:h-80 lg:w-[500px] lg:h-auto"
      />
      {/* Textbox of blog card */}
      <div className="my-auto flex flex-col  gap-y-2  px-4 pb-2 lg:px-0 lg:pb-0 lg:pr-4">
        {/* date of creation */}
        <p className="mt-4 text-sm">{item.createdAt.substring(0, 10)}</p>

        {/* title */}
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
          {item.title.substring(0, 50)}
        </h1>

        {/* short description */}
        <div
          className="md:text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: sanitizedHtml,
          }}
        />
      </div>
    </div>
  );
}
