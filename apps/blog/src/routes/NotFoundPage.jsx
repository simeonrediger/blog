import ErrorPage from '@/components/ErrorPage/ErrorPage.jsx';

export default function NotFoundPage() {
  return <ErrorPage error={{ message: 'HTTP 404: Not Found' }} />;
}
