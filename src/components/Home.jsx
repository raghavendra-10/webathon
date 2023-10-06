import React from "react";
import Navbar from "./Navbar";

import Lottie from "react-lottie";
import gif1 from "./gif1.json"

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: gif1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-cover bg-center w-full flex justify-center  min-h-screen">
      <Lottie options={defaultOptions} width={1000}/>
       
      </div>
    </div>
  );
};

export default Home;
