import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Import Firestore methods
import PlacementCard from "./PlacementCard";
import './Placements.css';

const Placements = () => {
  const [placements, setPlacements] = useState([]);

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
    <div>
      <h1 className="text-2xl font-semibold mb-4">Placements</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {placements.map((placement) => (
          <PlacementCard key={placement.uid} placement={placement} />
        ))}
      </div>
    </div>
  );
};

export default Placements;