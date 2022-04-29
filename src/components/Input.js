import React, { useState } from 'react';
import '../style/Input.scss';

export const Input = ({ name, placeholder, label, value, errorMessage, onChange }) => {
  return (
    <label> {label}
      <p className='error'>{errorMessage}</p>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

