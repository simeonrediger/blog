import App from '../App/App.jsx';
import Post from './Post/Post.jsx';
import PostList from './PostList/PostList.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <PostList /> },
      { path: '/posts/:id', element: <Post /> },
    ],
  },
];

export default routes;
