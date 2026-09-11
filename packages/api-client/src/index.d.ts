import api from './api.js';

export type Api = typeof api;

export type ApiSubset = {
  [ResourceName in keyof Api]?: Partial<Api[ResourceName]>;
};

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
