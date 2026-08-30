import App from '../App/App.jsx';
import NotFoundPage from './NotFoundPage/NotFoundPage.jsx';
import Post from './Post/Post.jsx';
import PostList from './PostList/PostList.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostList /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
