import { NotFoundPage, Post, PostsView } from '@blog/ui';

import App from './App.jsx';

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
