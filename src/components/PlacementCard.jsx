import React from "react";
// import './PlacementCard.css';

const PlacementCard = ({ placement }) => {
  return (
    <div className="placement-card">
      <div className="card-content">
        <img
            src={placement.profilePhotoURL}
            alt="profile photo"
            className="profile-photo"
        />
        <h2 className="profile-name">{placement.username}</h2>
        <p className="company-name">Company: {placement.companyName}</p>
        <p className="package-offered">Package Offered: {placement.packageOffered}</p>
      </div>
    </div>
  );
};

export default PlacementCard;
