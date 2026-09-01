import buildApi from './build-api.js';

const jsonHeader = { 'Content-Type': 'application/json' };

const api = {
  posts: {
    getAll: { path: '/posts' },
    getById: { path: ({ id }) => `/posts/${id}` },
    createComment: {
      path: ({ id }) => `/posts/${id}/comments`,
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
  },
};

buildApi(api.posts);

export default api;
