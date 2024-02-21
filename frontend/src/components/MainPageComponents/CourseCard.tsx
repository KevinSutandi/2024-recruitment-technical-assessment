import React from 'react';
import { CourseCardProps } from '@/util/types';

export default function CourseCard({
  coursePrefix,
  courseCode,
  courseTitle,
  averageStars,
  totalReviews,
  offeredTerms,
}: CourseCardProps) {
  const generateStarIcons = (averageStars: number): JSX.Element[] => {
    const starIcons: JSX.Element[] = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      if (i <= averageStars) {
        starIcons.push(
          <div key={i} className='text-purple-300 text-2xl'>
            ★
          </div>
        );
      } else {
        starIcons.push(
          <div key={i} className='text-gray-200 text-2xl'>
            ★
          </div>
        );
      }
    }

    return starIcons;
  };

  const generateTermBubbles = (offeredTerms: string[]): JSX.Element[] => {
    const termBubbles: JSX.Element[] = [];

    for (let i = 0; i < offeredTerms.length; i++) {
      termBubbles.push(
        <div
          key={i}
          className='bg-blue-100 text-black text-xs px-2 py-1 rounded-xl'
        >
          {offeredTerms[i]}
        </div>
      );
    }

    return termBubbles;
  };

  return (
    <div className='flex flex-col px-6 w-80 h-48 bg-white rounded-lg shadow-lg'>
      <div className='flex flex-row py-4 items-center justify-between'>
        <p className='text-2xl text-black font-extrabold'>
          {coursePrefix}
          {courseCode}
        </p>
        {/* Star Rating */}
        <div className='flex flex-col'>
          <div className='flex flex-row'>{generateStarIcons(averageStars)}</div>
          <p className='text-xs text-gray-400'>{totalReviews} Reviews</p>
        </div>
      </div>
      <div className='flex flex-row justify-between mb-14'>
        <p className='text-xs'>{courseTitle}</p>
      </div>

      <div className='flex flex-row gap-3'>
        {generateTermBubbles(offeredTerms)}
      </div>
    </div>
  );
}
