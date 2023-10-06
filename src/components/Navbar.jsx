import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assests/newlogo.png"; 

const Navbar = () => {
  return (
    <div className="bg-blue-500 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex px-2 items-center">
          <img src={Logo} alt="Divulge Logo" className="h-8  rounded-full w-8 mr-2" />
          <h1 className="text-white text-lg sm:text-3xl font-semibold">PLACEMENT PORTAL</h1>
        </div>
        <ul className="flex gap-2 sm:text-xl sm:space-x-4 over">
          
        <li>
            <Link
              to="/aboutus"
              className=" bg-transparent border border-blue-500 text-black hover:bg-blue-500 hover:text-white py-2  rounded"> 
              AboutUs
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className=" bg-transparent border border-blue-500 text-black hover:bg-blue-500 hover:text-white py-2 rounded"
            >
              SignUp/SignIn
            </Link>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
