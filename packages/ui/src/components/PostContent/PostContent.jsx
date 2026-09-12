import sanitizeHtml from '@blog/html-sanitizer';

import styles from './PostContent.module.css';

export default function PostContent({ content }) {
  return (
    <div
      className={styles.contentWrapper}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
    />
  );
}
