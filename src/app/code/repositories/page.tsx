import Link from 'next/link';
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa';

async function fetchRepositories() {
  const response = await fetch('https://api.github.com/users/jonasbne/repos');
  const repositories = await response.json();
  return repositories;
}

export default async function RepositoriesPage() {
  const repositories = await fetchRepositories();
  return (
    <div className='flex flex-col items-center'>
      <h2 className='mb-4'>Repositories</h2>
      <ul>
        {repositories.map((repository: any) => (
          <li className='bg-gray-700 mb-4 rounded-md p-4' key={repository.id}>
            <Link href={`/code/repositories/${repository.name}`}>
              <h3 className='font-bold'>{repository.name}</h3>
              <p className='font-light text-sm'>
                Description: {repository.description || 'n/a'}
              </p>
              <div className='flex justify-between mt-2'>
                <div className='flex items-center gap-x-2'>
                  <FaStar />
                  {repository.stargazers_count}
                </div>
                <div className='flex items-center gap-x-2'>
                  <FaCodeBranch />
                  {repository.forks_count}
                </div>
                <div className='flex items-center gap-x-2'>
                  <FaEye />
                  {repository.watchers_count}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
