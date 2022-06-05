import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.scss';
import logo from '../../Assets/GI.png';

const NavBar = () => {
   const currentUser = true;
   return (
      <Fragment>
         <div className="nav-container">
             <Link className="logoImageContainer" to="/">
                <img src={logo} width='100%' height='100%'/>
            </Link>

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
