import { NotFoundPage, Post, PostsView } from '@blog/ui';

import App from '../App.jsx';
import EditPostView from './EditPostView.jsx';
import NewPostView from './NewPostView.jsx';
import SignupView from './SignupView.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostsView /> },
      { path: '/register', element: <SignupView /> },
      { path: '/new-post', element: <NewPostView /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '/posts/:id/edit', element: <EditPostView /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
