import React, { useState, useEffect,useContext } from 'react';
import { Button } from './Button';
import { ButtonSignOut } from './ButtonSignOut';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../App';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  


  const {state} = useContext(UserContext);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const RenderMenu = () =>{
      if (state){
        return(
        <> <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        GeoRequête
          <i class='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
              <Link to='/'
               className='nav-links' 
               onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/Sign-Out'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign Out
              </Link>
            </li>
        </ul>
      </div>
           
            
          </>
        )
      }else{
        return(
          <>
          <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GeoRequête
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
                <Link to='/'
                 className='nav-links' 
                 onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
             
              <li>
                <Link
                  to='/Sign-In'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li>
          </ul>
          
            {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
        </div>
             
            </>
          )
        
      }
  }
  return (
    
    <>
      <nav className='navbar'>
            <RenderMenu/>
          
      </nav>
    </>
  );
}

export default Navbar; 