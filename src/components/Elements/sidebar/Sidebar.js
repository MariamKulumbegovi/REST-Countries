import React from "react";
import { slide as Menu } from "react-burger-menu";
import '../../layout/styles.css'
import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import * as route from '../../../constants/routes';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';





export default props => {
 
    const { loggedIn, logOut } = useContext(AuthContext);
  
    
    
    

  const renderGuest = () => {
     
    
    
      return (
        <div className="is-justify-content-flex-end pr-4">
          <div className="buttons margins ">
            <NavLink className="button is-danger" to={route.REGISTER_PATH}>
              <strong>Sign up</strong>
            </NavLink>
            <NavLink className=" button is-dark" to={route.LOGIN_PATH}>
              Log in
            </NavLink>
          </div>
        </div>
      );
    };
    const renderUser = () => {
      return (
        <div className=" height200 ">
          <div className=" is-flex is-flex-direction-column">
           
    
            <NavLink activeClassName="selected" className="navbar-item  white" to={route.COUNTRIES_PATH}>
              Countries
            </NavLink>
            <NavLink activeClassName="selected" className="navbar-item white" to={route.LIST_PATH}>
              List
            </NavLink>
          </div>
    
          <div className="buttons ">
            <button className="button is-danger" onClick={logOut}>
              Log Out
            </button>
          </div>
        </div>
      );
    };
  return (

    <Menu {...props}>
      <div  className="backcolor" >
        {loggedIn ? renderUser() : renderGuest()}
      </div>
    </Menu>
  );
};