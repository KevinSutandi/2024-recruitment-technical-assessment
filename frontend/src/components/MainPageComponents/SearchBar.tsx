import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

type SearchBarProps = {
  placeholder: string;
  additionalClasses?: string;
};

export default function SearchBar() {
  return (
    <div className='h-10 p-3 mt-5 ring-2 rounded-sm ring-indigo-300 justify-center'>
      <div className='flex flex-row items-center gap-7 h-full'>
        <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
        <p className='text-sm font-medium text-indigo-300'>
          Search for a class e.g COMP1511
        </p>
      </div>
    </div>
  );
}
