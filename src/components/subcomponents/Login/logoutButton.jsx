import React from "react";
import Button from "react-bootstrap/Button";
import { signOut } from "../../../../fireBase";

const Logout = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "15px",
        }}
        onClick={signOut}
        variant="light"
      >
        Logout
      </Button>{" "}
    </div>
  );
};
export default Logout;