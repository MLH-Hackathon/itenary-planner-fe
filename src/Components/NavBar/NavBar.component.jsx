import React, { Fragment, useContext} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.styles.scss';
import logo from '../../Assets/GI.png';
import {UserContext} from '../../Context/UserContext'

const NavBar = () => {
   const { authenticated} = useContext(UserContext);

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
               {authenticated ? (
                  <Link className="link " to="/tripdetails">
                     Add Trip Details
                  </Link>
               ) : (
                  <></>
               )}

               {authenticated ? (
                  <Link className="link " to="/settings">
                     Settings
                  </Link>
               ) : (
                  <></>
               )}
               {authenticated ? (
                  <Link className="link " to="#">
                     Log Out
                  </Link>
               ) : (
                  <Link className="link " to="/login">
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
