import React, { useEffect , useContext} from 'react';
import {useHistory} from 'react-router-dom';
import '../../App.css';
import { UserContext } from '../../App';

export default function SignOut() {
    
  const {state,dispatch} = useContext(UserContext);

  const history = useHistory();
  function signout () {
    
    alert('logout successful')
    dispatch({type:"USER",payload:false});
      history.push('/Sign-In', {replace: true });
    
  };

    return(
      <>
      <button onClick={signout} >SignOut</button>
    
      </>
    );
}