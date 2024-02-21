import React from 'react';
import { PopupOpenType } from '@/util/types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchBar({ handlePopUpOpen }: PopupOpenType) {
  return (
    <div
      className='h-10 p-3 mt-5 ring-2 rounded-sm ring-indigo-300 justify-center cursor-pointer'
      onClick={handlePopUpOpen}
    >
      <div className='flex flex-row items-center gap-7 h-full'>
        <MagnifyingGlassIcon className='h-6 w-6 text-indigo-300' />
        <p className='text-sm font-medium text-indigo-300'>
          Search for a class e.g COMP1511
        </p>
      </div>
    </div>
  );
}
