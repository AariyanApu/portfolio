'use client';
import { fetchData } from '@/types/dataTypes';
import { fetcher } from '@/utils/getData';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import * as Yup from 'yup';
import Loading from '../utility/Loading';

export default function DashboardProjects() {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [post, setPost] = useState({
    title: '',
    imgUrl: '',
    description: '',
    projectLink: '',
    codeLink: '',
    tags: [] as string[],
    slug: '',
  });
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    // imageUrl: Yup.string().required('Image is required'),
    description: Yup.string().required('Description is required'),
    projectLink: Yup.string().required('Project Link is required'),
    codeLink: Yup.string().required('Code Link is required'),
    tags: Yup.array().required('Tags is required'),
  });

  const handleUpload = (result: any) => {
    setPost({
      ...post,
      imgUrl: result.info.public_id,
    });
  };

  const slugify = (str: string) => {
    console.log(str); // Add this line to check the value of str
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    console.log('handleSubmit called');
    console.log(slugify(post.title)); // Add this line

    e.preventDefault();
    try {
      await validationSchema.validate(post);
      await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          imgUrl: post.imgUrl,
          description: post.description,
          projectLink: post.projectLink,
          codeLink: post.codeLink,
          tags: post.tags,
          slug: slugify(post.title),
        }),
      });
      setIsFormSubmitted(true);
      setPost({
        title: '',
        imgUrl: '',
        description: '',
        projectLink: '',
        codeLink: '',
        tags: [],
        slug: '',
      });
    } catch (error) {
      console.log(error);
    } finally {
      mutate();
      setLoading(false);
    }
  };

  const tags: string[] = [];

  const { data, error, isLoading, mutate }: SWRResponse<fetchData, any> =
    useSWR('/api/projects', fetcher);
  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load user</div>;

  const handleDelete = async (slug: string) => {
    try {
      const response = await fetch(`/api/projects/${slug}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const result = await response.json();
      } else {
        const errorResult = await response.json();
        console.error('Error deleting post:', errorResult);
      }
      mutate();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className='w-full px-8'>
      <div className='flex w-full  flex-row justify-between px-10'>
        <div>
          <form onSubmit={handleSubmit} className='mt-10 flex w-96 flex-col'>
            <p className='py-3 text-2xl text-primary-color '>
              Add New Project Here!
            </p>

            <input
              type='text'
              placeholder='Title'
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className='input_style'
            />

            <textarea
              placeholder='Description'
              value={post.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              className='input_style h-36'
            />
            <input
              type='text'
              placeholder='Project Link'
              value={post.projectLink}
              onChange={(e) =>
                setPost({ ...post, projectLink: e.target.value })
              }
              className='input_style'
            />
            <input
              type='text'
              placeholder='Code Link'
              value={post.codeLink}
              onChange={(e) => setPost({ ...post, codeLink: e.target.value })}
              className='input_style'
            />
            <input
              type='text'
              placeholder='Tags'
              value={post.tags}
              onChange={(e) =>
                setPost({ ...post, tags: e.target.value.split(',') })
              }
              className='input_style'
            />
            <CldUploadButton
              uploadPreset='projects'
              className='button_style mt-2'
              onUpload={handleUpload}
            />
            <button type='submit' className='button_style my-5 w-full'>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {isFormSubmitted && (
            <p className='text-primary-color'>
              Project submitted successfully!
            </p>
          )}
        </div>
        <div className='mt-10'>
          <h1 className='text-center text-2xl text-primary-color'>
            All Reviews
          </h1>
          <div className='flex flex-col'>
            {Array.isArray(data) &&
              data?.reverse().map((project) => (
                <div
                  key={project.id}
                  className='my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5'
                >
                  <h1 className='text-xl'>{project.title}</h1>
                  <h1>{project.tags.map((tag: any) => ` #${tag}`)}</h1>
                  <h1>{project.description}</h1>
                  <h1>{project.projectLink}</h1>
                  <h1>{project.codeLink}</h1>

                  <CldImage
                    width={300}
                    height={300}
                    src={project.imgUrl}
                    alt={project.title}
                    className='h-20 w-20  p-1'
                  />
                  <div className='flex w-full gap-x-5'>
                    <button
                      className='button_style mt-2'
                      onClick={() => handleDelete(project.slug)}
                    >
                      Delete
                    </button>

                    <button className='button_style mt-2 px-5'>Edit</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
