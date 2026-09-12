import { useState } from 'react';

import { handleSubmit, ErrorList } from '@blog/ui';

import api from '../../api-client.js';
import { useAuth } from '@blog/ui';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const { logIn } = useAuth();
  const [errors, setErrors] = useState(null);

  function handleSubmitLogin(event) {
    handleSubmit({
      event,
      callApi: api.tokens.create,
      fields: ['username', 'password'],
      handleData: logIn,
      handleError: setErrors,
    });
  }

  return (
    <form onSubmit={handleSubmitLogin}>
      <h2 className="pageTitle">Log in</h2>
      <div className={styles.fields}>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" id="username" required />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" required />
      </div>
      {errors?.length > 0 && <ErrorList errors={errors} />}
      <button type="submit" className={styles.loginButton}>
        Log in
      </button>
    </form>
  );
}
