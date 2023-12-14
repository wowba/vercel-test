import { rewrite } from '@vercel/edge';

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api')) {
    console.log(request);
    console.log(new URL(process.env.BACKEND_ENDPOINT, request.url));
    return rewrite(new URL(process.env.BACKEND_ENDPOINT, request.url));
  }
}
