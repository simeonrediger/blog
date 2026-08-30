const posts = {
  getAll: { path: '/posts' },
  getById: { path: ({ id }) => `/posts/${id}` },
};

export default posts;
