'use server';

export async function GET(request: Request) {
  console.log(request);
}

export async function POST(request: Request) {
  if (request.method === 'POST') {
  }
}
