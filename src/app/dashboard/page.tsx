'use client';
import AddSiglePost from '@/components/dashboard/AddSinglePost';
import DashboardProjects from '@/components/dashboard/DashboardProjects';
import DeletePost from '@/components/dashboard/DeletePost';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [isClicked, setIsClicked] = useState(false);
  const session = useSession();

  return (
    <div className=' max-w-6xl mx-auto'>
      <div className=' my-8 mt-5 text-center text-3xl font-semibold text-primary-color'>
        Dashboard
      </div>
      {session?.data?.user?.email === 'aariyanapu1@gmail.com' ? (
        <div>
          <button
            onClick={() => setIsClicked(!isClicked)}
            className='dashboard_button'
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
      ) : (
        <div className='items-center justify-center flex flex-col'>
          <button
            onClick={() => signOut()}
            className='dashboard_button border-red-600 text-red-500 hover:text-red-600'
          >
            Sign Out From this Email
          </button>

          <div className='text-2xl font-semibold text-center my-8'>
            You are not authorized to access this page
          </div>
        </div>
      )}
    </div>
  );
}
