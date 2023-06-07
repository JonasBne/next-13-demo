'use client';

export const AddNote = () => {
  return (
    <button
      onClick={() => console.log('clicked')}
      className='bg-gray-100 text-gray-800 p-2 rounded-md'
    >
      Add note +
    </button>
  );
};
