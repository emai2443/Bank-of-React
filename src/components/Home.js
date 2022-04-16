// src/components/Home.js
// The Home component is used to demonstrate the use of Link.

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <img src="https://picsum.photos/200/200" alt="bank" />
        <h1>Bank of React</h1>
        <br />
        <h2>By: Eric Mai and Richard Vazquez</h2>

        <Link to="/userProfile">User Profile</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/Credits">Credits</Link>
        <br />
        <Link to="">Debits (to be implemented in the Assignment)</Link>
        <br />
        <Link to="/balance">View Balance</Link>
      </div>
    );
  }
}

export default Home;
