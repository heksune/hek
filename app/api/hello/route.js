import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const res = await fetch(`https://api.lanyard.rest/v1/users/837033284705189919`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const data = await res.json();
  return NextResponse.json({ data }); 
};
