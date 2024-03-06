import React from "react";

import Button from "react-bootstrap/Button";

import { signInWithGoogle } from "../../../../fireBase";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {auth, firebaseConfig} from "../../../../fireBase";
// import {firebaseConfig} from "/Users/davonbridgett/Documents/BIKE_THE_BIG_APPLE/Bike-The-Big-Apple/fireBase.js";

// import { useContext } from 'react';
// import { MyContext } from './MyContext';
// import { User } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const app = initializeApp(firebaseConfig);

  useEffect(() => {
    
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        
        setUser(user);
      } else {
        
        setUser(null);
      }
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? ( 
        <p>Welcome, {user.displayName}!</p>
      ) : (
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
        </Button>
      )}
    </div>
  );
};

export default Login;
