'use client';
import { fetchData } from '@/types/dataTypes';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import useSWR, { SWRResponse } from 'swr';
import * as Yup from 'yup';

export default function DashboardReview() {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
    imgSrc: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    body: Yup.string().required('Body is required'),
    author: Yup.string().required('Author is required'),
    imgSrc: Yup.string().required('Image is required'),
  });

  const handleUpload = (result: any) => {
    setPost({ ...post, imgSrc: result.info.public_id });
  };
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    try {
      await validationSchema.validate(post);
      await fetch('/api/review', {
        method: 'POST',
        body: JSON.stringify(post),
      });
      setIsFormSubmitted(true);
      setPost({
        title: '',
        body: '',
        author: '',
        imgSrc: '',
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

  const { data, error, mutate, isLoading }: SWRResponse<fetchData, any> =
    useSWR('/api/review', fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load user</div>;

  // Delete a review
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/review/${id}`, {
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
        Review Dashboard
      </h1>
      <div className='flex w-full  flex-row justify-between px-10'>
        <div>
          <form onSubmit={handleSubmit} className='mt-10 flex w-96 flex-col'>
            <p className='py-3 text-2xl text-primary-color '>
              Add Review Here!
            </p>
            <input
              type='text'
              placeholder='Title'
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              className='input_style'
            />

            <input
              type='text'
              placeholder='Author'
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className='input_style'
            />

            <textarea
              placeholder='Body'
              value={post.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}
              className='input_style h-36'
            />

            <CldUploadButton
              uploadPreset='review'
              className='button_style mt-2'
              onUpload={handleUpload}
            />
            <button type='submit' className='button_style my-5 w-full'>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          {isFormSubmitted && (
            <p className='text-primary-color'>Review submitted successfully!</p>
          )}
        </div>
        <div className='mt-10'>
          <h1 className='text-center text-2xl text-primary-color'>
            All Reviews
          </h1>
          <div className='flex flex-col'>
            {Array.isArray(data) &&
              data?.reverse().map((review) => (
                <div
                  key={review._id}
                  className='my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5'
                >
                  <h1 className='text-xl'>{review.title}</h1>
                  <p className='text-lg'>{review.body}</p>
                  <p className='text-lg'>{review.author}</p>
                  <CldImage
                    width={300}
                    height={300}
                    src={review.imgSrc}
                    alt={review.title}
                    className='h-20 w-20  p-1'
                  />
                  <div className='flex w-full gap-x-5'>
                    <button
                      className='button_style mt-2'
                      onClick={() => handleDelete(review._id)}
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
