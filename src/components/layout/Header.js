import { useContext } from 'react';
import '../../css/header.css';
import { Link, NavLink } from 'react-router-dom';
import * as route from '../../constants/routes';
import { AuthContext } from '../providers/AuthProvider';

export const Header = () => {
  const { loggedIn, logOut } = useContext(AuthContext);

  const renderGuest = () => {
    return (
      <div className="buttons">
        <NavLink className="button is-danger" to={route.REGISTER_PATH}>
          <strong>Sign up</strong>
        </NavLink>
        <NavLink className=" button is-dark" to={route.LOGIN_PATH}>
          Log in
        </NavLink>
      </div>
    );
  };
  const renderUser = () => {
    return (
      <div className="buttons">
        <NavLink className="navbar-item button" to={route.MAINUSER_PATH}>
          Main User
        </NavLink>
        <button className="button is-danger" onClick={logOut}>
          Log Out
        </button>
      </div>
    );
  };

  return (
    <div className="">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item" to={route.HOME_PATH}>
              Home
            </NavLink>
            <NavLink className="navbar-item" to={route.COUNTER_PATH}>
              Counter
            </NavLink>

            <NavLink className="navbar-item" to={route.ASKQUESTION_PATH}>
              Ask a Question (this page is protected)
            </NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink className="navbar-link" to="#">
                More
              </NavLink>

              <div className="navbar-dropdown">
                <NavLink className="navbar-item" to="#">
                  About
                </NavLink>
                <NavLink className="navbar-item" to="#">
                  Jobs
                </NavLink>
                <NavLink className="navbar-item" to="#">
                  Contact
                </NavLink>
                <hr className="navbar-divider" />
                <NavLink className="navbar-item" to="#">
                  Report an issue
                </NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {loggedIn ? renderUser() : renderGuest()}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
