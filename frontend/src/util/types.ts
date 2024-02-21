export type CourseCardProps = {
  coursePrefix: string;
  courseCode: number;
  courseTitle: string;
  averageStars: number;
  totalReviews: number;
  offeredTerms: string[];
};

export type PopupOpenType = {
  handlePopUpOpen: () => void;
};

export type PopupCloseType = {
  handlePopUpClose: () => void;
};
