import CloudImage from "@/components/utility/CloudImage";
import { getDataNoStore } from "@/utils/getData";
import DOMPurify from "isomorphic-dompurify";

import { getCldImageUrl } from "next-cloudinary";
import { Metadata } from "next";
import { getCldOgImageUrl } from "next-cloudinary";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = params;
  const data = await getDataNoStore(`posts/${slug}`);

  const publicId = data.imgUrl;
  const headline = data.title;
  const body = data.desc.substring(0, 100) + "...";

  return {
    openGraph: {
      images: [
        {
          // Prefer a different size? Be sure to update the width and height of the
          // metadata as well as the image configuration of getCldOgImageUrl
          width: 1200,
          height: 630,
          url: getCldOgImageUrl({
            src: publicId,
            effects: [{ colorize: "100,co_black" }],
            overlays: [
              {
                publicId,
                width: 1200,
                height: 630,
                crop: "fill",
                effects: [
                  {
                    opacity: 60,
                  },
                ],
              },
              {
                width: 700,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 80,
                  fontWeight: "bold",
                  text: headline,
                },
                position: {
                  y: -50,
                },
              },
              {
                width: 700,
                crop: "fit",
                text: {
                  alignment: "center",
                  color: "white",
                  fontFamily: "Source Sans Pro",
                  fontSize: 37,
                  text: body,
                },
                position: {
                  y: 50,
                },
              },
            ],
          }),
        },
      ],
    },
  };
}

export default async function SingleBlog({ params }: any) {
  const { slug } = params;
  const data = await getDataNoStore(`posts/${slug}`);
  const htmlContent = data.desc;
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  return (
    <div className={`mx-auto my-4 max-w-3xl px-4 lg:px-0 `}>
      <CloudImage
        src={data.imgUrl}
        alt={data.title}
        height={800}
        width={800}
        customStyles="w-full my-8 rounded object-cover object-center lg:h-96 lg:w-[800px]"
      />

      <div className="flex w-full flex-col gap-y-6">
        <div className=" mt-8 flex flex-row gap-x-20">
          <p className=""> CREATED AT : {data.createdAt.substring(0, 10)}</p>
          <p className="">VIEWED : {data.views} TIMES.</p>
        </div>
        <h1 className="text-2xl font-semibold sm:text-4xl">{data.title}</h1>
        <div
          className="prose-base prose-slate prose-invert    prose-a:text-sky-400 hover:prose-a:text-sky-500 prose-img:my-8 prose-img:w-auto prose-img:overflow-hidden prose-img:rounded-md prose-img:object-cover prose-img:object-center prose-img:shadow-md  md:text-sm lg:text-lg prose-img:lg:h-96"
          dangerouslySetInnerHTML={{
            __html: sanitizedHtml,
          }}
        />
      </div>
    </div>
  );
}

//TODO: Add separete slug for each blog post
//TODO: Add SEO friendly meta tags and dynamic image  for each blog post
//
