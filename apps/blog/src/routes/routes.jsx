import App from '../App/App.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Post from './Post/Post.jsx';
import PostList from './PostList/PostList.jsx';

const notFoundError = { message: 'HTTP 404: Not Found' };

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostList /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '*', element: <ErrorPage error={notFoundError} /> },
    ],
  },
];

export default routes;
