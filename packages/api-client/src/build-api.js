const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;

export default function buildApi(apiSchema) {
  for (const [methodName, { path, options }] of Object.entries(apiSchema)) {
    apiSchema[methodName] = createApiMethod(path, options);
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
