const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;

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

function buildApi(apiNamespace) {
  for (const [methodName, { path, options }] of Object.entries(apiNamespace)) {
    apiNamespace[methodName] = createApiMethod(path, options);
  }
}

function createApiMethod(path, baseOptions) {
  return typeof path === 'function'
    ? (params, options = {}) => {
        Object.assign(options, baseOptions);
        return fetch(`${API_ORIGIN}${path(params)}`, options);
      }
    : (options = {}) => {
        Object.assign(options, baseOptions);
        return fetch(`${API_ORIGIN}${path}`, options);
      };
}

export default api;
