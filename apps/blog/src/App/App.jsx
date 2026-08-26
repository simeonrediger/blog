import { Outlet } from 'react-router';

export default function App() {
  return (
    <div>
      <header>
        <h1>Blog</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
