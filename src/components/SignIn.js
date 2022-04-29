import React, { useState } from 'react';
import { SignInForm } from './SignInForm';

import FakeAPI from '../data/FakeAPI'

export const SignIn = ({ onSignIn }) => {
  const [generalErrorMessage, setGeneralErrorMessage] = useState(null);

  const handleSubmit = (username, password) => {
    setGeneralErrorMessage(null);
    FakeAPI.login({ username, password })
      .then(
        function handleSuccesSignIn(user) {
          if (typeof onSignIn === 'function') {
            onSignIn(user.username)
          }
        }
      )
      .catch(
        function handleFailedSignIn(err) {
          setGeneralErrorMessage(err);
        }
      )
  }

  return (
    <SignInForm
      generalError={generalErrorMessage}
      onSubmit={handleSubmit} />
  );
}
