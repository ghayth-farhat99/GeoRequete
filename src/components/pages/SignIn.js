import React from 'react';
import FormSignIn from './FormSignIn';
import './SignUp.css';
import img2 from './images/img-2.svg';
const Login=()=>{

    return(
        <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={img2} alt='spaceship' />
        </div>
        
          <FormSignIn />
        
      </div>
    </>
  );
};

export default Login;