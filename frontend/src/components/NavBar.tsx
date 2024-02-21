import Unilectives from '../assets/unilectives.svg';
import Image from 'next/image';
import {
  BookOpenIcon,
  ShieldCheckIcon,
  BarsArrowUpIcon,
  UserCircleIcon,
  MoonIcon,
  ArrowRightEndOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <nav className='fixed flex flex-col p-5 w-20 h-full bg-[#f9fafb] items-center'>
      <Image src={Unilectives} alt='Unilectives' className='w-9 h-9' />
      <hr className='h-[2px] w-full my-5 bg-[#e5e7eb] border-0' />
      <div className='flex flex-col justify-between h-full items-center'>
        <div className='flex-col flex gap-8'>
          <BookOpenIcon className='w-6 h-6' />
          <ShieldCheckIcon className='w-6 h-6' />
        </div>
        <div className='flex-col flex gap-8 mb-4'>
          <BarsArrowUpIcon className='w-6 h-6 rotate-90' />
          <UserCircleIcon className='w-6 h-6' />
          <MoonIcon className='w-6 h-6' />
          <ArrowRightEndOnRectangleIcon className='w-6 h-6' />
        </div>
      </div>
    </nav>
  );
}
