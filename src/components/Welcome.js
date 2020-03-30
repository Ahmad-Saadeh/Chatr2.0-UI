import React from "react";
import { Link } from "react-router-dom";

/**
 * This page should be PUBLIC-ONLY
 * Which means I should NOT be able to
 * get to it if I'm logged in
 */
const Welcome = () => (
  <header className="masthead d-flex">
    <div className="container text-center my-auto z-1">
      <h1 className="mb-1">WELCOME TO CHATR</h1>
      <h3 className="mb-5">
        <em>You're gonna need to login to see the messages</em>
      </h3>
      <Link to="/login" className="btn btn-primary btn-lg">
        Login
      </Link>
    </div>
    <div className="overlay z-0" />
  </header>
);

export default Welcome;
