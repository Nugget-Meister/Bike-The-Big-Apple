import React from "react";
import Button from "react-bootstrap/Button";
import { signOut } from "../../../../fireBase";

const Logout = () => {
  const handleLogout = async () => {
    await signOut();
    window.location.href = "/"; 
  };
  return (
    <div>
      
        <Button className="bg-blue-200 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
export default Logout;