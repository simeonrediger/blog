import createApiClient from '@blog/api-client';

const api = createApiClient({
  users: ['create'],
  posts: ['getAll', 'getById', 'create', 'update', 'delete'],
  comments: ['create', 'update', 'delete'],
});

export default api;
