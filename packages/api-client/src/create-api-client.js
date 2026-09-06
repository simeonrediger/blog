import api from './api.js';

export default function createApiClient(methodNamesByResource) {
  validateShape(methodNamesByResource, api);
  const client = {};

  for (const [resource, methods] of Object.entries(methodNamesByResource)) {
    client[resource] = {};

    for (const method of methods) {
      client[resource][method] = api[resource][method];
    }
  }

  return client;
}

function validateShape(methodNamesByResource, api) {
  if (typeof methodNamesByResource !== 'object') {
    throw new TypeError(
      `methodNamesByResource must be an object. Got ${typeof methodNamesByResource}`,
    );
  }

  validateResources(methodNamesByResource, api);
  validateMethods(methodNamesByResource, api);
}

function validateResources(methodNamesByResource, api) {
  for (const resource of Object.keys(methodNamesByResource)) {
    if (!Object.keys(api).includes(resource)) {
      throw new Error(`No resource named '${resource}'`);
    }
  }
}

function validateMethods(methodNamesByResource, api) {
  for (const [resource, methods] of Object.entries(methodNamesByResource)) {
    if (!Array.isArray(methods)) {
      throw new TypeError(
        `methodNamesByResource values must be arrays. Found ${typeof methods}`,
      );
    }

    for (const method of methods) {
      if (typeof method !== 'string') {
        throw new TypeError(
          `Methods must be specified as strings. Found ${typeof method}`,
        );
      }

      if (!api[resource][method]) {
        throw new Error(`No ${resource} method named '${method}'`);
      }
    }
  }
}
