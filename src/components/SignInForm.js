import React, { useState } from 'react';
import { Input } from './Input';
import '../style/SignInForm.scss';

export const SignInForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;

  }

  return (
    <form >
      <p className='answer'>correct login: <strong>example</strong> </p>
      <p className='answer'>correct password: <strong>qwerty</strong> </p>
      <Input name='username' label='Login: ' value={values.username} onChange={handleChange} />
      <Input name='password' label='Passoword: ' value={values.password} onChange={handleChange} />
      <button type='submit'>Sign in!</button>
      <p className='global-error'>Global error in Form!</p>

    </form>
  );
}
