import React from "react";

const PlacementCard = ({ placement }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg mb-4 shadow-md">
      <div className="flex flex-col items-center mb-4">
      <img
          src={placement.profilePhotoURL}
          alt="profile photo"
          className="w-40 h-40 object-cover rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">{placement.username}</h2>
      </div>
      <p className="text-gray-800 text-center mt-2">Company: {placement.companyName}</p>
      <p className="text-gray-800 text-center mt-2">Package Offered: {placement.packageOffered}</p>
      {/* Add more placement fields as needed */}
    </div>
  );
};

export default PlacementCard;
