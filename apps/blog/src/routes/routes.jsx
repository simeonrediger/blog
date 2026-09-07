import App from '@/App/App.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import Post from './Post/Post.jsx';
import PostsView from './PostsView/PostsView.jsx';

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
