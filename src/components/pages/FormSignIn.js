
import React, { useContext,useState } from 'react';
import {useHistory} from 'react-router-dom';
import './SignUp.css';
import ImgPassword from './images/icon-password-1.jpg';
import { UserContext } from '../../App';


const FormSignIn=()=>{
  
  const {state,dispatch} = useContext(UserContext);

  const history = useHistory();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const handleChangePassword = e => {
    setpassword(e.target.value);
  };
  const handleChangeEmail = e => {
    setemail(e.target.value);
  };

  async function loginuser(event){
    event.preventDefault()

   const response = await fetch('http://localhost:4000/app/Sign-In',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify({
        email,
        password
      }),
    })
    const data = await response.json()

    if(data.user || (email=="admin@gmail.com"&password=="admin123") ){ 
      dispatch({type:"USER",payload:true})
      alert('login successful')
      
      history.push('/services', {replace: true });
      //window.location.href = "/services"
      
    }else{
      alert('please check your username and password ')
    }
    console.log(data)
  
  }

  return (
    <div className='form-content-right'>
      <form  onSubmit={loginuser} className='form' noValidate >
          
      <img className='form-img-pass' src={ImgPassword} alt='spaceship' />
        <h1>
            Sign In
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange={handleChangeEmail}
          />
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange={handleChangePassword}
          />
        </div>
        <button className='form-input-btn' type='submit' >
         Sign In
        </button>
        <span className='form-input-login'>Forgot password ?<a href="#">here</a>
        </span>
        <span className='form-input-login'>Do you have an account ?<a href="/Sign-Up">Sign Up</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignIn;