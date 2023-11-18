/* eslint-disable @next/next/no-img-element */

import { sliderNavigation } from '@/utils/data';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function SlideBar({ selected, setSelected }: any) {
  const handleClick = (id: string) => {
    setSelected(id);
  };
  console.log(selected);
  return (
    <div className='mt-16 flex w-64 flex-col gap-y-5 overflow-y-auto px-6 pt-2'>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7'>
          <li>
            <ul role='list' className='-mx-2 space-y-3'>
              {sliderNavigation.map((item) => (
                <li key={item.name} onClick={() => handleClick(item.name)}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-secondary-color text-white'
                        : 'text-gray-400 hover:bg-secondary-color hover:text-white',
                      'group flex cursor-pointer gap-x-4 rounded-lg border border-secondary-color p-2 text-sm font-semibold leading-6 transition-all duration-300 ease-in'
                    )}
                  >
                    <item.icon
                      className='h-6 w-6 shrink-0'
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className='-mx-6 '>
            <a
              href='/'
              className='flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800'
            >
              <img
                className='h-8 w-8 rounded-full bg-gray-800'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <span className='sr-only'>Your profile</span>
              <span aria-hidden='true'>Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
