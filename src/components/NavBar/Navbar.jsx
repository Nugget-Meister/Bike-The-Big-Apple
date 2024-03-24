// import Container from "react-bootstrap/Container";
// // import Nav from "react-bootstrap/Nav";
// // import Navbar from "react-bootstrap/Navbar";
import Login from "../subcomponents/Login/loginButton.jsx";
import Logout from "../subcomponents/Login/logoutButton.jsx";
import React, { useState } from 'react';


const NavBar = () => {const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};

return (
  <div className="flex">
    <div
      onClick={toggleSidebar}
      className={`cursor-pointer p-4 bg-gray-700 text-white ${isOpen ? 'hidden' : 'block'}`}
    >
      Menu
    </div>

    <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out`}>
      <div onClick={toggleSidebar} className="text-right cursor-pointer">
        X
      </div>
      
      <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <Login/>
      </button>
      <button className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        <Logout/>
      </button>
    </div>
  </div>
);
};

export default NavBar;
