import { Repository } from '../page';
import Link from 'next/link';
import { RepositoryCard } from '@/app/components/RepositoryCard';
import { Suspense } from 'react';
import { Loading } from '@/app/components/Loading';

interface Props {
  params: {
    name: string;
  };
}

async function fetchRepository(name: string) {
  const response = await fetch(`https://api.github.com/repos/jonasbne/${name}`);
  const repository: Repository = await response.json();
  return repository;
}

export default async function RepositoryPage({ params: { name } }: Props) {
  const repository = await fetchRepository(name);
  return (
    <>
      <Link className='block mb-5' href='/code/repositories'>
        <button className='bg-gray-100 text-gray-800 p-2 rounded-md'>
          Return to repositories
        </button>
      </Link>
      <Suspense fallback={<Loading />}>
        <RepositoryCard
          redirectUrl={`https://github.com/JonasBne/${repository.name}`}
          repository={repository}
        />
      </Suspense>
    </>
  );
}
