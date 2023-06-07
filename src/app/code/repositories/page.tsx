import { Loading } from '@/app/components/Loading';
import { RepositoryCard } from '@/app/components/RepositoryCard';
import { Suspense } from 'react';

export type Repository = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
};

async function fetchRepositories() {
  const response = await fetch('https://api.github.com/users/jonasbne/repos');

  const repositories: Array<Repository> = await response.json();
  return repositories;
}

export default async function RepositoriesPage() {
  const repositories = await fetchRepositories();
  return (
    <div className='flex flex-col items-center'>
      <h2 className='mb-4'>Repositories</h2>
      <Suspense fallback={<Loading />}>
        <ul>
          {repositories.map((repository) => (
            <RepositoryCard
              key={repository.id}
              redirectUrl={`/code/repositories/${repository.name}`}
              repository={repository}
            />
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
