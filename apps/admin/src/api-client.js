import createApiClient from '@blog/api-client';

const api = createApiClient({
  tokens: ['create'],
  users: ['create'],
  posts: ['getAll', 'getById', 'create', 'update', 'delete'],
  comments: ['create', 'update', 'delete'],
});

export default api;
