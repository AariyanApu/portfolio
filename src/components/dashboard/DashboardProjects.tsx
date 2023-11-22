'use client';
import { fetchData } from '@/types/dataTypes';
import { projects } from '@/utils/data';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import * as Yup from 'yup';

export default function DashboardProjects() {
  const [data, setData] = useState(projects);
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [post, setPost] = useState({
    title: '',
    imageUrl: '',
    description: '',
    projectLink: '',
    codeLink: '',
    tags: [] as string[],
  });
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    imageUrl: Yup.string().required('Image is required'),
    description: Yup.string().required('Description is required'),
    projectLink: Yup.string().required('Project Link is required'),
    codeLink: Yup.string().required('Code Link is required'),
    tags: Yup.array().required('Tags is required'),
  });

  const handleUpload = (result: any) => {
    setPost({ ...post, imageUrl: result.info.public_id });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(post);
      await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(post),
      });
      setIsFormSubmitted(true);
      setPost({
        title: '',
        imageUrl: '',
        description: '',
        projectLink: '',
        codeLink: '',
        tags: [],
      });
    } catch (error) {
      console.log(error);
    } finally {
      // mutate();
      setLoading(false);
    }
  };

  const tags: string[] = [];

  // const fetcher = async (...args: Parameters<typeof fetch>) => {
  //   const res = await fetch(...args);
  //   return res.json();
  // };

  // const { data, error, isLoading, mutate }: SWRResponse<fetchData, any> =
  //   useSWR('/api/projects', fetcher);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Failed to load user</div>;
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    } finally {
      // mutate();
    }
  };
  return (
    <div className='w-full px-8'>
      <h1 className='mt-5 text-center text-3xl font-semibold text-primary-color'>
        Project Dashboard
      </h1>
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
                  key={project._id}
                  className='my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5'
                >
                  <h1 className='text-xl'>{project.name}</h1>
                  <h1 className='text-xl'>{project.title}</h1>
                  <h1>{project.tags.map((tag: any) => ` #${tag}`)}</h1>
                  <h1>{project.description}</h1>
                  <h1>{project.projectLink}</h1>
                  <h1>{project.codeLink}</h1>

                  <CldImage
                    width={300}
                    height={300}
                    src={project.imageUrl}
                    alt={project.title}
                    className='h-20 w-20  p-1'
                  />
                  <div className='flex w-full gap-x-5'>
                    <button
                      className='button_style mt-2'
                      onClick={() => handleDelete(project._id)}
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
