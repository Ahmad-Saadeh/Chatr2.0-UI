import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

/*
 *
 * Using a ternary operator would simplify this code a lot.
 * You wouldn't need to define buttons or have an if statement.
 *
 */

const AuthButton = ({ user, logout }) => {
  let buttons = [
    <li key="loginButton" className="nav-item">
      <Link to="/login" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item">
      <Link to="/signup" className="nav-link">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>
  ];

  if (user) {
    buttons = (
      <>
        <span className="navbar-text">{user.username}</span>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </Link>
        </li>
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
