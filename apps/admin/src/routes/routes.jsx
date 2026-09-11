import { NotFoundPage, Post, PostsView } from '@blog/ui';

import App from '../App.jsx';
import NewPostView from './NewPostView.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostsView /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '/new-post', element: <NewPostView /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
