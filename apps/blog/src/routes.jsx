import App from './App.jsx';
import { NotFoundPage, Post, PostsView } from '@blog/ui';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostsView /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
