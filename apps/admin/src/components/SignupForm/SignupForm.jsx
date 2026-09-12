import { useState } from 'react';

import { handleSubmit, ErrorList } from '@blog/ui';

import api from '../../api-client.js';
import { useAuth } from '@blog/ui';

import styles from './SignupForm.module.css';

export default function SignupForm() {
  const { logIn } = useAuth();
  const [errors, setErrors] = useState(null);

  function handleSubmitSignup(event) {
    handleSubmit({
      event,
      callApi: api.users.create,
      fields: ['username', 'password', 'passwordConfirmation', 'adminPassword'],
      handleData: logIn,
      handleError: setErrors,
    });
  }

  return (
    <form onSubmit={handleSubmitSignup}>
      <h2 className="pageTitle">Sign up</h2>
      <div className={styles.fields}>
        <label htmlFor="username">Username</label>
        <input name="username" type="text" id="username" required />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" id="password" required />
        <label htmlFor="password-confirmation">Confirm password</label>
        <input
          name="passwordConfirmation"
          type="password"
          id="password-confirmation"
          required
        />
        <label htmlFor="admin-password">Admin password</label>
        <input
          name="adminPassword"
          type="password"
          id="admin-password"
          required
        />
      </div>
      {errors?.length > 0 && <ErrorList errors={errors} />}
      <button type="submit" className={styles.signupButton}>
        Sign up
      </button>
    </form>
  );
}
