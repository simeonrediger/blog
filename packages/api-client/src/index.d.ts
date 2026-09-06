import api from './api.js';

type Api = typeof api;

type MethodNamesByResource = {
  [ResourceName in keyof Api]?: Array<keyof Api[ResourceName]>;
};

type ApiClient<Selection extends MethodNamesByResource> = {
  [ResourceName in keyof Selection]: {
    [
      MethodName in Selection[ResourceName][number]
    ]: Api[ResourceName][MethodName & keyof Api[ResourceName]];
  };
};

/**
 * Creates an API client containing the specified methods.
 */
export default function createApiClient<
  Selection extends MethodNamesByResource,
>(methodNamesByResource: Selection): ApiClient<Selection>;
