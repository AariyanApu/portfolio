'use client';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { ChangeEvent, useState } from 'react';
import useSWR from 'swr';
import * as Yup from 'yup';
import Loading from '../utility/Loading';
import { SkillData } from '@/types/dataTypes';

export default function DashboardSkills() {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [post, setPost] = useState({
    name: '',
    icon: '',
  });

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Title is required'),
    icon: Yup.string().required('Icon is required'),
  });

  const handleUpload = (result: any) => {
    setPost({ ...post, icon: result.info.public_id });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(post);
      await fetch('/api/skills', {
        method: 'POST',
        body: JSON.stringify(post),
      });
      setIsFormSubmitted(true);
      setPost({
        name: '',
        icon: '',
      });
    } catch (error) {
      console.log(error);
    } finally {
      mutate();
      setLoading(false);
    }
  };

  // Fetch data for all reviews
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args);
    return res.json();
  };
  const { data, error, isLoading, mutate } = useSWR('/api/skills', fetcher);
  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load user</div>;

  // Delete a review
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/skills/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log(error);
    } finally {
      mutate();
    }
  };

  return (
    <div className='w-full px-8'>
      <h1 className='mt-5 text-center text-3xl font-semibold text-primary-color'>
        Skills Dashboard
      </h1>
      <div className='flex w-full  flex-row justify-between px-10'>
        <div>
          <form onSubmit={handleSubmit} className='mt-10 flex w-96 flex-col'>
            <p className='py-3 text-2xl text-primary-color '>
              Add Skills Here!
            </p>
            <input
              type='text'
              placeholder='Title'
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
              className='input_style'
            />

            <CldUploadButton
              uploadPreset='skills'
              className='button_style mt-2'
              onUpload={handleUpload}
            />
            <button type='submit' className='button_style my-5 w-full'>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {isFormSubmitted && (
            <p className='text-primary-color'>Skills submitted successfully!</p>
          )}
        </div>
        <div className='mt-10'>
          <h1 className='text-center text-2xl text-primary-color'>
            All Reviews
          </h1>
          <div className='flex flex-col'>
            {data?.reverse().map((skill: SkillData) => (
              <div
                key={skill._id}
                className='my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5'
              >
                <h1 className='text-xl'>{skill.name}</h1>

                <CldImage
                  width={300}
                  height={300}
                  src={skill.icon}
                  alt={skill.title}
                  className='h-20 w-20  p-1'
                />
                <div className='flex w-full gap-x-5'>
                  <button
                    className='button_style mt-2'
                    onClick={() => handleDelete(skill._id)}
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
