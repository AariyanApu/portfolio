'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendarComponent() {
  return (
    <div className='mx-auto flex items-center justify-center  pb-10 pt-16'>
      <GitHubCalendar username='aariyanapu' colorScheme='dark' />
    </div>
  );
}
