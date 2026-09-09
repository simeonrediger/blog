import type { ApiSubset } from '@blog/api-client';
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
