
import { React, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../public/styles.css"

import Logout from "./components/subcomponents/Login/logoutButton";
import Login from "./components/subcomponents/Login/loginButton";

import NavBar from './components/NavBar/NavBar.jsx'

import Map from './components/pages/Map/Map'
import Profile from './components/pages/Profile/Profile'
import SavedRoutes from './components/pages/SavedRoutes/SavedRoutes'
import Splash from './components/pages/Splash/Splash'
import { AuthProvider } from "./Providers/AuthProvider";
import Testing from "./components/pages/testing.jsx";

function App() {
  
  const [isLoading, setIsLoading] = useState(false);


  return (
  <>
    {isLoading && <LoadingScreen animationName={animationName} />}
    <AuthProvider>
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path={'/'} element={<Splash/>}/>
        <Route path={'/map'} element={<Map/>}/>
        {/* <Route path={'/profile/:username'} element={<Profile/>}/> */}
        <Route path={'/profile'} element={<Profile/>}/>
        <Route path={'/saved'} element={<SavedRoutes/>}/>
        <Route path={'/testing'} element={<Testing/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  </>
  )

}

export default App;
