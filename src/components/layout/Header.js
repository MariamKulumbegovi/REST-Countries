import React from "react";
import { Link} from 'react-router-dom';
import Earth from '../../img/earth.png';
import styles from './Header.module.css';
import Sidebar from "../Elements/sidebar/Sidebar";
import { COUNTRIES_PATH } from "../../constants/routes";




export const Header = () => {
  

  return (
    <div>
      <nav
        className={`navbar is-fixed-top   ${styles[`navbar-color`]}`}
        role="navigation"
        aria-label="main navigation"
        id="nav"
      >
        <div className="navbar-brand hamburger ">
       
          <Link className="navbar-item" to={COUNTRIES_PATH}>
            <img className={styles.earth} src={Earth} width="auto" height="auto" />
          </Link>
          <Sidebar className="container left"  pageWrapId={"page-wrap"} outerContainerId={"nav"}  />
         
     
          
        

        </div>
        
        
      </nav>
    </div>
  );
};
