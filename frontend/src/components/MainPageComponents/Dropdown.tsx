import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Dropdown() {
  return (
    <div className='mt-1 ring-1 ring-gray-400 w-52 rounded-md shadow-md'>
      <div className='flex flex-row justify-between items-center p-2 px-4 text-gray-400'>
        <p>Sort by</p>
        <ChevronDownIcon className='h-5 w-5' />
      </div>
    </div>
  );
}
