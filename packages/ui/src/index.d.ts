import type { Api, ApiSubset } from '@blog/api-client';
import type { ReactNode } from 'react';

export default function BaseApp(): React.JSX.Element;

export function ApiProvider(props: {
  api: ApiSubset;
  children?: ReactNode;
}): React.JSX.Element;

export function PermissionsProvider(props: {
  userRole?: string;
  children?: ReactNode;
}): React.JSX.Element;

export function Post(): React.JSX.Element;

export function PostsView(): React.JSX.Element;

export function NotFoundPage(): React.JSX.Element;

export function ErrorList(props: { errors: string[] }): React.JSX.Element;

export function ErrorPage(props: { error: Error }): React.JSX.Element;

export function PageLoader(): React.JSX.Element;

type ApiMethod = {
  [ResourceName in keyof Api]: Api[ResourceName][keyof Api[ResourceName]];
}[keyof Api];

type PathParams = Record<string, string | number | boolean>;

export function useFetch(
  fetchFunc: ApiMethod,
  options: { params: PathParams; enabled: boolean },
);

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
