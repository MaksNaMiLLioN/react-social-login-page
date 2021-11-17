import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dev App</span>
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
    </div>
  );
};

export default Navbar;
