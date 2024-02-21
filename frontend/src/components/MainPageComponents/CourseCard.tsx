import React from 'react';

type CourseCardProps = {
  coursePrefix: string;
  courseCode: number;
  courseTitle: string;
  averageStars: number;
  totalReviews: number;
  offeredTerms: string[];
};

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
      <div className='flex flex-row justify-between'>
        <p className='text-xs'>{courseTitle}</p>
      </div>

      <div className='flex flex-row justify-between'>
        <p className='text-xs text-gray-400'>
          Offered in: {offeredTerms.join(', ')}
        </p>
      </div>
    </div>
  );
}
