import App from '../App/App.jsx';
import PostList from './PostList/PostList.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <PostList /> }],
  },
];

export default routes;
