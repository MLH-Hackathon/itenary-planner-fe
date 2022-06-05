import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.scss';
import logo from '../../Assets/GI-logo.png';

const NavBar = () => {
   const currentUser = true;
   return (
      <Fragment>
         <div className="nav-container">
            {/* <img src={logo} width='60px' height='60px'/> */}

            {/* onClick={signOutHandler} */}
            <div className="links-container">
               <Link className="link " to="/">
                  Homeage{' '}
               </Link>
               {currentUser ? (
                  <Link className="link " to="#">
                     Log Out
                  </Link>
               ) : (
                  <Link className="link " to="/signin">
                     {' '}
                     Log In
                  </Link>
               )}
            </div>
         </div>
      </Fragment>
   );
};

export default NavBar;
