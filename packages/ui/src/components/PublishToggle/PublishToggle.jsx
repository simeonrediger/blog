import { useState } from 'react';

import useApi from '../../hooks/useApi.js';
import handleSubmit from '../../utils/handle-submit.js';
import useAuth from '../../hooks/useAuth.js';

import styles from './PublishToggle.module.css';

export default function PublishToggle({ postId, initialPublished }) {
  const api = useApi();
  const { token } = useAuth();
  const [published, setPublished] = useState(initialPublished);

  function togglePublished() {
    handleSubmit({
      callApi: api.posts.update,
      params: { id: postId },
      token,
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
