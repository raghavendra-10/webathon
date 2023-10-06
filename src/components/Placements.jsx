import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore methods
import PlacementCard from "./PlacementCard";

const Placements = ({ placement }) => {
  const [placements, setPlacements] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const placementsCollection = collection(db, "placements");
        const querySnapshot = await getDocs(placementsCollection);
        const placementData = querySnapshot.docs.map((doc) => doc.data());
        setPlacements(placementData);
      } catch (error) {
        console.error("Error fetching placements:", error);
      }
    };

    fetchPlacements();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-black p-4">
      <div className="flex items-center mb-6 space-x-4">
        {/* Link to the home page */}
        <Link to="/dashboard">
          <button className="bg-green-400 px-2 py-1 rounded hover:text-white">Home</button>
        </Link>
        <h1 className="text-4xl font-bold text-navy-900">Placements</h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 pr-4 py-2 rounded-full bg-navy-900 bg-opacity-20 text-white focus:outline-none focus:bg-opacity-40 transition duration-300 ease-in-out"
          />
          <svg className="w-4 h-4 text-white absolute top-1/2 left-2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-5xl">
        {placements
          .filter((placement) => 
            placement.username.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((placement) => (
            <PlacementCard key={placement.uid} placement={placement} />
          ))}
      </div>
    </div>
  );
};

export default Placements;
