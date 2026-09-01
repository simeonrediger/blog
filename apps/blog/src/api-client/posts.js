const posts = {
  getAll: { path: '/posts' },
  getById: { path: ({ id }) => `/posts/${id}` },
  createComment: {
    path: ({ id }) => `/posts/${id}/comments`,
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    },
  },
};

export default posts;
