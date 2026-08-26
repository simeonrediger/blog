import App from '../App/App.jsx';
import Posts from './Posts/Posts.jsx';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <Posts /> }],
  },
];

export default routes;
