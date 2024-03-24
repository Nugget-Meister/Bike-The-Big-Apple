import React from "react";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <div>
      <Link to="/profile">
        {/* <Button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
          }}
        > */}
        <button>
          Profile
        </button>
        {/* </Button> */}
      </Link>
    </div>
  );
};

export default ProfileButton;
