import React from "react";
import "./RiderStatisticBoxes.css";
import { useAuthContext } from "../../../Providers/AuthProvider";

const RiderStatisticBoxes = () => {
  //access the API 
  //we need the USER ID/Mock Data
const user = useAuthContext()

  return (
    <div className="riderStatisticBoxes">
      <div className="column">
        <div className="rectangle"><h2>user.displayName</h2>
        <p>Description or additional text</p></div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Routes Completed</h2>
        <p>Description or additional text</p>
</div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Average Elevation</h2>
        <p>Description or additional text</p></div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Completed Checkpoints</h2>
        <p>Description or additional text</p></div>
      </div>
    </div>
  );
};

export default RiderStatisticBoxes;