const API_ORIGIN = import.meta.env.VITE_API_ORIGIN;

export default function buildApi(apiSchema) {
  for (const [methodName, { path, options }] of Object.entries(apiSchema)) {
    apiSchema[methodName] = createApiMethod(path, options);
  }
}

function createApiMethod(path, baseOptions = {}) {
  return typeof path === 'function'
    ? (params, options = {}) => {
        deepMerge(options, baseOptions);
        return fetch(`${API_ORIGIN}${path(params)}`, options);
      }
    : (options = {}) => {
        deepMerge(options, baseOptions);
        return fetch(`${API_ORIGIN}${path}`, options);
      };
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    const value = source[key];

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      const base =
        target[key] !== null &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
          ? target[key]
          : {};

      target[key] = deepMerge(base, value);
    } else {
      target[key] = value;
    }
  }

  return target;
}
