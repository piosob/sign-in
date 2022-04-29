import React, { useState } from 'react';
import '../style/Input.scss';

export const Input = ({ name, label, value, onChange }) => {
  return (
    <label> {label}
      <p className='error'>sample not too long error!</p>
      <input type="text" />
    </label>
  );
}

