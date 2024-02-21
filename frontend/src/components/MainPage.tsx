import React from 'react';
import SearchBar from './MainPageComponents/SearchBar';
import Dropdown from './MainPageComponents/Dropdown';
import CourseCard from './MainPageComponents/CourseCard';
import courses from '../../courses.json';

export default function MainPage() {
  return (
    <div className='ml-20 w-full'>
      <div className='flex flex-col mx-32 my-5 gap-4'>
        <p className='text-sm'>DevSoc Presents</p>
        <p className='text-blue-500 text-7xl font-bold'>unilectives</p>
        <p className='font-bold'>
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <SearchBar />
        <Dropdown />
        {/* CourseCard will be used in a for loop to get it from json */}
        <CourseCard
          coursePrefix='COMP'
          courseCode={1511}
          courseTitle='Programming Fundamentals'
          averageStars={4.8}
          totalReviews={64}
          offeredTerms={['T1', 'T2']}
        />
      </div>
    </div>
  );
}
