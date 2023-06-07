import { Course } from '../page';

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  return (
    <li className='bg-slate-100 p-4 mb-4 rounded-md text-gray-700 list-none'>
      <h3>{course.title}</h3>
      <small>level: {course.level}</small>
      <p>{course.description}</p>
    </li>
  );
};
