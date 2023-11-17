'use client';

import { fetchData } from '@/types/dataTypes';
import useSWR, { SWRResponse } from 'swr';

export default function DashboardContact() {
  // Fetch data for all reviews
  const fetcher = async (...args: Parameters<typeof fetch>) => {
    const res = await fetch(...args);
    return res.json();
  };
  const { data, error, mutate, isLoading }: SWRResponse<fetchData, any> =
    useSWR('/api/contact', fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load user</div>;

  // Delete a review
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/contact/${id}`, {
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
        People Wants to meet you are here!
      </h1>
      <div className='mt-10'>
        <h1 className='text-center text-2xl text-primary-color'>
          All Contacts
        </h1>
        <div className='flex flex-col'>
          {Array.isArray(data) &&
            data?.reverse().map((item: fetchData) => (
              <div
                key={item._id}
                className='my-5 flex w-96 flex-col rounded-lg border-2 border-secondary-color p-5'
              >
                <h1 className='text-xl'>{item.name}</h1>
                <h2>{item.email}</h2>
                <p>{item.message}</p>
                <div className='flex w-full gap-x-5'>
                  <button
                    className='button_style mt-2'
                    onClick={() => handleDelete(item._id)}
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
  );
}
