import { NextResponse } from 'next/server';
import notes from './notes.json';

export async function GET() {
  return NextResponse.json(notes);
}
