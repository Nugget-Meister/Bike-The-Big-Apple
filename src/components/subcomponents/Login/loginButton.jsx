import React from "react";

import Button from "react-bootstrap/Button";

import { signInWithGoogle } from "../../../../fireBase";
const Login = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "15px",
        }}
        onClick={signInWithGoogle}
        variant="light"
      >
        Sign In
      </Button>{" "}
    </div>
  );
};
export default Login;
