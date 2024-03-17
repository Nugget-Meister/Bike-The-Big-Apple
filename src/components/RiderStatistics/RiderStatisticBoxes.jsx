import React from "react";
import "./RiderStatisticBoxes.css";

const RiderStatisticBoxes = () => {
  return (
    <div className="riderStatisticBoxes">
      <div className="column">
        <div className="rectangle"><h2>Total Miles</h2>
        <p>UserState</p></div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Routes Completed</h2>
        <p>UserState</p>
</div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Average Elevation</h2>
        <p>UserState</p></div>
        
      </div>
      <div className="column">
        <div className="rectangle"><h2>Completed Checkpoints</h2>
        <p>UserState</p></div>
      </div>
    </div>
  );
};

export default RiderStatisticBoxes;
