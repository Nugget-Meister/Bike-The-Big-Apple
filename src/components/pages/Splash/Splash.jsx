import React from 'react';
import './Splash.css'
import { useNavigate } from 'react-router-dom';
// import "../map"

const Splash = () => {

    const navigate = useNavigate();

    const handleStartBikingClick = () => {
        navigate('/map');
    };


    return (
        <div className="bg-[#FCFFE7] flex flex-col justify-start items-center pt-8 pb-8 min-h-screen">
          <div className="text-center">
            <div className="font-gotham-condensed-bold text-8xl mb-20">
              <div>Bike The</div>
              <div>Big Apple</div>
            </div>
            <img src='https://i.ibb.co/9sCPhwS/BtBA-Logo.png' alt="BtBA_Logo" className="mx-auto pb-7 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
            <button onClick={handleStartBikingClick} className="bg-bike-blue text-white font-gotham px-16 py-2 h-12 rounded-lg hover:bg-apple-red transition-colors bite-button animate-bounce">
              Start Biking!
            </button>
          </div>
        </div>
      );
}

export default Splash;