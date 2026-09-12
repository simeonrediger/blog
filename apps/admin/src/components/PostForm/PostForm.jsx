import { useRef, useState } from 'react';

import { handleSubmit, useAuth, ErrorList } from '@blog/ui';

import styles from './PostForm.module.css';
import Editor from '../Editor/Editor.jsx';

export default function PostEditor({ post, callApi, handleData }) {
  const { token } = useAuth();
  const [title, setTitle] = useState(post?.title ?? '');
  const [published, setPublished] = useState(post?.published ?? false);
  const [errors, setErrors] = useState(null);
  const editorRef = useRef(null);

  function handleEditorInit(event, editor) {
    editorRef.current = editor;
  }

  function handleSubmitPost(event) {
    const content = editorRef.current.getContent();

    handleSubmit({
      event,
      callApi,
      params: post ? { id: post.id } : undefined,
      token,
      body: { title, content, published },
      handleData,
      handleError: setErrors,
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmitPost}>
        <h2 className="pageTitle">{post ? 'Edit' : 'New'} post</h2>
        <input
          name="title"
          aria-label="Title"
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <div className={styles.editorWrapper}>
          <Editor
            name="content"
            placeholder="Compose your content here"
            initialContent={post?.content}
            className={styles.editor}
            onInit={handleEditorInit}
            required
          />
        </div>
        <label className={styles.checkbox}>
          <input
            name="published"
            type="checkbox"
            checked={published}
            onChange={event => setPublished(event.target.checked)}
          />
          <span>Publish</span>
        </label>
        {errors?.length > 0 && <ErrorList errors={errors} />}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </section>
  );
}
