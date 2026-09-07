import createApiClient from '@blog/api-client';

const api = createApiClient({
  posts: ['getAll', 'getById'],
  comments: ['create'],
});

export default api;
