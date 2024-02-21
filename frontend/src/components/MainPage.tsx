'use client';
import React, { useState } from 'react';
import SearchBar from './MainPageComponents/SearchBar';
import Dropdown from './MainPageComponents/Dropdown';
import CourseCard from './MainPageComponents/CourseCard';
import courses from '../../courses.json';

export default function MainPage() {
  const [isUnilectivesClicked, setIsUnilectivesClicked] = useState(false);

  const handleUnilectivesClick = () => {
    setIsUnilectivesClicked(!isUnilectivesClicked);
  };

  return (
    <div className='ml-20 w-full'>
      <div className='flex flex-col mx-32 my-5 gap-4'>
        <p className='text-sm'>DevSoc Presents</p>
        <p
          className={`text-blue-500 text-7xl font-bold cursor-pointer ${
            isUnilectivesClicked ? 'text-blue-100' : ''
          }`}
          onClick={handleUnilectivesClick}
        >
          unilectives
        </p>
        <p className='font-bold'>
          Your one-stop shop for UNSW course and elective reviews.
        </p>
        <SearchBar />
        <Dropdown />
        {/* CourseCard will be used in a for loop to get it from json */}
        <div className='grid grid-cols-3 gap-6'>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              coursePrefix={course.course_prefix}
              courseCode={course.course_code}
              courseTitle={course.course_title}
              averageStars={course.average_stars}
              totalReviews={course.total_reviews}
              offeredTerms={course.offered_terms}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
