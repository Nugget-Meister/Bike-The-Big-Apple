import React from "react";

import UserCard from "../../UserCard/UserCard";
import RiderStatisticBoxes from "../../RiderStatistics/RiderStatisticBoxes";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
    <div className="userInformation">
      
        <UserCard />
     
      <div className="profileTextCard">
        
          <p className="profileTextCardDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>
        {/* //offical BTBA Button*/}
        <button className="savedRoutesButton">SAVED ROUTES</button>
      
      </div>
          </div>
          <hr/>
  
      
      
     
    </div>
    <div>
      <RiderStatisticBoxes />
      </div>
      <hr/>
    </div>
  );
};

export default Profile;
