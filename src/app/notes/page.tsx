import { AddNote } from '../components/features/AddNote';
import { NoteCard } from '../components/features/NoteCard';
import { Button } from 'antd';

export const metadata = {
  title: 'About',
  description: 'About page',
  keywords: 'nextjs, typescript, tailwindcss',
};

export type Note = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

async function getNotes() {
  const response = await fetch('http:localhost:3000/api/notes');
  const notes: Array<Note> = await response.json();
  return notes;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <>
      <AddNote />
      <ul className='mt-4'>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </ul>
    </>
  );
}
