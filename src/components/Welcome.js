import React from 'react';
import '../style/Welcome.scss'
export const Welcome = ({ isLoaded }) => {
  return (
    <div className='welcome-result'>
      {isLoaded ?
        <>
          <strong>user logged in succesfully</strong>
          <div className='cat' />
        </>
        : <div className='loader' />}
    </div>
  )
}
