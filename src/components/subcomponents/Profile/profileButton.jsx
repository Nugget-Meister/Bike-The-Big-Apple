import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <div>
      <Link to="/profile">
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            borderRadius: "15px",
          }}
        >
          Profile
        </Button>
      </Link>
    </div>
  );
};

export default ProfileButton;
