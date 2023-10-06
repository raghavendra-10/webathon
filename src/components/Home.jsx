import React from "react";
import Navbar from "./Navbar";
import Logo from "../assests/newlogo.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center w-full flex justify-center  min-h-screen"style={{ backgroundImage: `url(${Logo})` }}>
        
       
      </div>
    </div>
  );
};

export default Home;
