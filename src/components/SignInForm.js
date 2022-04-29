import React, { useState } from 'react';
import { Input } from './Input';
import '../style/SignInForm.scss';
import './validation'
import { validation } from './validation';

export const SignInForm = ({ generalError, onSubmit }) => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    const errorMessages = validation(values);
    setErrorMessage(errorMessages)
    const { username, password } = values;
    if (!errorMessages) { onSubmit(username, password) }
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='answer'>correct login: <strong>example</strong> </p>
      <p className='answer'>correct password: <strong>qwerty</strong> </p>
      <Input
        name='username'
        placeholder='enter login'
        label='Login: '
        value={values.username}
        errorMessage={errorMessage?.username}
        onChange={handleChange}
      />
      <Input
        name='password'
        placeholder='enter password'
        label='Password: '
        value={values.password}
        errorMessage={errorMessage?.password}
        onChange={handleChange}
      />
      <button type='submit'>Sign in!</button>
      {generalError ? <p className='global-error'>{generalError}</p> : null}

    </form>
  );
}
