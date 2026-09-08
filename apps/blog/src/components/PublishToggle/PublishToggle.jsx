import { useState } from 'react';

import { handleSubmit } from '@blog/api-client';

import api from '@/api-client.js';

import styles from './PublishToggle.module.css';

export default function PublishToggle({ postId, initialPublished }) {
  const [published, setPublished] = useState(initialPublished);

  function togglePublished() {
    handleSubmit({
      callApi: api.posts.update,
      params: { id: postId },
      body: { published: !published },
      handleData: ({ post: { published } }) => setPublished(published),
      handleError: error => {
        if (error) {
          console.error(error);
        }
      },
    });
  }

  return (
    <button onClick={togglePublished} className={styles.publishToggle}>
      {published ? 'Unpublish' : 'Publish'}
    </button>
  );
}
