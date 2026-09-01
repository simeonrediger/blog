import posts from './posts.js';

const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;

const api = {};

extend(api, 'posts', posts);

function extend(api, resourceName, resourceApi) {
  api[resourceName] = {};

  for (const [methodName, { path, options }] of Object.entries(resourceApi)) {
    api[resourceName][methodName] = createApiMethod(path, options);
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
