import Link from 'next/link';

export const Header = () => {
  return (
    <header className='border border-slate-100 flex flex-col items-center p-4 mb-4'>
      <h1 className='text-2xl font-bold tracking-wider'>Github finder</h1>
      <ul className='flex gap-x-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href={`/code/repositories`}>Repositories</Link>
      </ul>
    </header>
  );
};
