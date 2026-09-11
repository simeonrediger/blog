import { useRef, useState } from 'react';

import { handleSubmit, ErrorList } from '@blog/ui';

import styles from './PostForm.module.css';
import Editor from '../Editor/Editor.jsx';

export default function PostEditor({ callApi, handleData }) {
  const [errors, setErrors] = useState(null);
  const editorRef = useRef(null);

  function handleEditorInit(event, editor) {
    editorRef.current = editor;
  }

  function handleSubmitPost(event) {
    const title = event.target.elements.title.value;
    const content = editorRef.current.getContent();
    const published = event.target.elements.published.checked;

    handleSubmit({
      event,
      callApi,
      body: { title, content, published },
      handleData,
      handleError: setErrors,
    });
  }

  return (
    <section>
      <form onSubmit={handleSubmitPost}>
        <h2 className="pageTitle">New post</h2>
        <input name="title" aria-label="Title" placeholder="Title" required />
        <div className={styles.editorWrapper}>
          <Editor
            name="content"
            placeholder="Compose your content here"
            className={styles.editor}
            onInit={handleEditorInit}
            required
          />
        </div>
        <label className={styles.checkbox}>
          <input name="published" type="checkbox" />
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
