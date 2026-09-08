import buildApi from './build-api.js';

const jsonHeader = { 'Content-Type': 'application/json' };

const api = {
  posts: {
    getAll: { path: '/posts' },
    getById: { path: ({ id }) => `/posts/${id}` },
    update: {
      path: ({ id }) => `/posts/${id}`,
      options: { method: 'PUT', headers: { ...jsonHeader } },
    },
  },
  comments: {
    create: {
      path: ({ id }) => `/posts/${id}/comments`,
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
  },
};

buildApi(api.posts);
buildApi(api.comments);

export default api;
