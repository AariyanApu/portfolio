// import { getData, getDataNoStore, getDataNoStoreLocal } from '@/utils/getData'
import Image from 'next/image';

export default async function SingleBlog({ params }: any) {
  const { slug } = params;
  // const data = await getDataNoStore(`posts/${slug}`)

  return (
    <div className={`mx-auto my-4 max-w-5xl px-4 lg:px-0 `}>
      <Image
        src={'/asset/react.jpg'}
        alt={''}
        height={800}
        width={800}
        className='w-full my-8 rounded object-cover object-center lg:h-96 lg:w-[700px]'
      />

      <div className='flex flex-col gap-y-6'>
        {/* <p className="mt-8">{data.createdAt.substring(0, 10)}</p> */}
        <h1 className='text-2xl sm:text-3xl'>How to use React Context API</h1>
        {/* <div
          className="md:text-sm lg:text-base"
          dangerouslySetInnerHTML={{
            __html: data.desc,
          }}
        /> */}

        <div className=''>
          React Context API is a way to essentially create global variables that
          can be passed around in a React app. This is the alternative to prop
          drilling, or passing props from grandparent to parent to child, and so
          on.
          <br />
          <br />
          Context is often touted as a simpler, lighter solution to using Redux
          for state management. However, context can only be used for simple
          state management, and Redux is still recommended for complex state
          management.
          <br />
          <br />
          In this tutorial, we’ll be using the useContext Hook in React to
          create a global state management system without needing to use Redux.
          <br />
          <br />
          Let’s get started!
        </div>
      </div>
    </div>
  );
}
