'use client';
import AddSiglePost from '@/components/dashboard/AddSinglePost';
import DashboardProjects from '@/components/dashboard/DashboardProjects';
import DeletePost from '@/components/dashboard/DeletePost';
import { useState } from 'react';

export default function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className=' max-w-6xl mx-auto'>
      <div className='text-3xl font-semibold text-center my-8'>Dashboard</div>
      <button
        onClick={() => setIsClicked(!isClicked)}
        className='px-4 py-2 border border-primary-color rounded-md text-primary-color  hover:text-white transition-colors  duration-300 ease-in-out mb-5 ml-8'
      >
        {isClicked ? 'Add Post' : 'Add Project'}
      </button>
      {isClicked ? (
        <DashboardProjects />
      ) : (
        <div className='flex flex-row'>
          <AddSiglePost />
          <DeletePost />
        </div>
      )}
    </div>
  );
}
