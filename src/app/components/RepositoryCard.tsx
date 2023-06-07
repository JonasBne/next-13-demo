'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { Repository } from '../code/repositories/page';

interface Props {
  repository: Repository;
}

export const RepositoryCard = ({ repository }: Props) => {
  return (
    <motion.button
      className='w-full'
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
    >
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
    </motion.button>
  );
};
