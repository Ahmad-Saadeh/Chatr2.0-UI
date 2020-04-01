import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

/*
 *
 * Check: if the user is logged in, redirect to another page.
 * This way you wouldn't have to put those conditions in the JSX below.
 *
 */
const Welcome = ({ user }) => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto z-1">
      {!user ? <h1 className="mb-1">WELCOME TO CHATR</h1> : ""}
      {!user ? (
        <h3 className="mb-5">
          <em>You're gonna need to login to see the messages</em>
        </h3>
      ) : (
        ""
      )}
      {!user ? (
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>
      ) : (
        <></>
      )}
    </div>
    <div className="overlay z-0" />
  </header>
);

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(Welcome);
