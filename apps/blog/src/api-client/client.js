import buildApi from './build-api.js';

const api = {
  posts: {
    getAll: { path: '/posts' },
    getById: { path: ({ id }) => `/posts/${id}` },
    createComment: {
      path: ({ id }) => `/posts/${id}/comments`,
      options: {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
    },
  },
};

buildApi(api.posts);

export default api;
