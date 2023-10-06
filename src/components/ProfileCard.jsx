import React from "react";

const ProfileCard = ({ profile }) => {
  return (
    <div className="border border-gray-200 p-4 rounded-lg mb-4 shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={profile.profilePhotoURL} // Replace with the actual field name where the photo URL is stored
          alt={`${profile.username}'s profile photo`}
          className="w-40 h-40 object-cover rounded-full mb-2"
        />
        <h2 className="text-xl font-semibold">{profile.username}</h2>
      </div>
      <p className="text-gray-800 text-center mt-2">Company: {profile.companyName}</p>
      <p className="text-gray-800 text-center mt-2">Package Offered: {profile.packageOffered}</p>
      {/* Add more profile fields as needed */}
    </div>
  );
};

export default ProfileCard;
