import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        {" "}
        <Link to="/" className="link">
          Dev App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src="https://images.pexels.com/photos/9968409/pexels-photo-9968409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">John Doe</li>
          <li className="listItem">Logout</li>
        </ul>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
