export type PathParams = Record<string, string>;

export type PathFunction = (params: PathParams) => string;

export interface ApiMethodSchema {
  path: string | PathFunction;
  options?: RequestInit;
}

export type ApiSchema = Record<string, ApiMethodSchema>;

export type ApiClient<T extends ApiSchema> = {
  [K in keyof T]: () => Promise<Response>;
};

export function buildApi<T extends ApiSchema>(apiSchema: T): ApiClient<T>;
