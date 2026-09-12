import buildApi from './build-api.js';

const jsonHeader = { 'Content-Type': 'application/json' };

const api = {
  tokens: {
    create: {
      path: '/tokens',
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
  },
  users: {
    create: {
      path: '/users',
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
  },
  posts: {
    getAll: { path: '/posts' },
    getById: { path: ({ id }) => `/posts/${id}` },
    create: {
      path: '/posts',
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
    update: {
      path: ({ id }) => `/posts/${id}`,
      options: { method: 'PUT', headers: { ...jsonHeader } },
    },
    delete: { path: ({ id }) => `/posts/${id}`, options: { method: 'DELETE' } },
  },
  comments: {
    create: {
      path: ({ id }) => `/posts/${id}/comments`,
      options: { method: 'POST', headers: { ...jsonHeader } },
    },
    update: {
      path: ({ id }) => `/comments/${id}`,
      options: { method: 'PUT', headers: { ...jsonHeader } },
    },
    delete: {
      path: ({ id }) => `/comments/${id}`,
      options: { method: 'DELETE' },
    },
  },
};

buildApi(api.tokens);
buildApi(api.users);
buildApi(api.posts);
buildApi(api.comments);

export default api;
