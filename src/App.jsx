import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "/Users/davonbridgett/Documents/BIKE_THE_BIG_APPLE/Bike-The-Big-Apple/src/components/NavBar/navBar.jsx";
import Logout from "./components/subcomponents/Login/logoutButton";
import Login from "./components/subcomponents/Login/loginButton";
import { useState, React } from "react";
import { MyContext } from "./MyContext";


function App() {
  
  const [text, setText] = useState("");

  return (
    <Router>
      <NavBar />
      <Routes>
   
      </Routes>

    </Router>
  );
}

export default App;
