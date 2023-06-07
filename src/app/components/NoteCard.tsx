import { Note } from '../notes/page';
import { format } from 'date-fns';

interface Props {
  note: Note;
}

export const NoteCard = ({ note }: Props) => {
  return (
    <li className='bg-slate-100 p-4 mb-4 rounded-md text-gray-700 list-none'>
      <h3>{note.title}</h3>
      <small>Created: {format(new Date(note.created_at), 'yyyy-mm-dd')} </small>
      <p>{note.content}</p>
    </li>
  );
};
