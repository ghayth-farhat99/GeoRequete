import React, { useState } from 'react';
import './SignUp.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import img2 from './images/img-2.svg';

const SugnUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={img2} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess/>
        )}
      </div>
    </>
  );
};

export default SugnUp;