import { CourseCard } from './components/CourseCard';

export const metadata = {
  title: 'Home',
  description: 'Homepage',
  keywords: 'nextjs, typescript, tailwindcss',
};

export type Course = {
  id: number;
  name: string;
  description: string;
  title: string;
  level: string;
};

async function fetchCourses() {
  const response = await fetch('http:localhost:3000/api/courses');
  const courses: Array<Course> = await response.json();
  return courses;
}

export default async function HomePage() {
  const courses = await fetchCourses();
  return (
    <>
      <h2 className='mb-4'>My courses</h2>
      <ul>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ul>
    </>
  );
}
