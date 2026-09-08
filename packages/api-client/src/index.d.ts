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

type ApiMethod = {
  [ResourceName in keyof Api]: Api[ResourceName][keyof Api[ResourceName]];
}[keyof Api];

type PathParams = Record<string, string | number | boolean>;

type XOR<A, B> =
  (A & { [K in keyof B]?: never }) | (B & { [K in keyof A]?: never });

/**
 * Handles form submission by collecting field values, calling an API method,
 * and processing the response data or errors.
 */
export function handleSubmit(
  options: {
    event?: SubmitEvent;
    callApi: ApiMethod;
    params: PathParams;
    handleData: (data: unknown) => void;
    handleError: (error: string[] | null) => void;
  } & XOR<
    Partial<{ body: Record<string, unknown> }>,
    Partial<{ fields: string[] }>
  >,
): void;
