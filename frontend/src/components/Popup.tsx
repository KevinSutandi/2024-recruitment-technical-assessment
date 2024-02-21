import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { PopupCloseType } from '@/util/types';

export default function Popup({ handlePopUpClose }: PopupCloseType) {
  return (
    <div className='fixed inset-0 bg-white h-1/4 ring-black ring-1 z-10 w-1/3 m-auto text-right'>
      <XMarkIcon
        className='w-8 h-8 text-right text-red-300 cursor-pointer'
        onClick={handlePopUpClose}
      />
    </div>
  );
}
