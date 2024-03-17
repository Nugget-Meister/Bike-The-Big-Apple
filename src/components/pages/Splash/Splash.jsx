import React from 'react';
import './Splash.css'
// import "../map"

const Splash = () => {
    return (
        <div className="bg-[#FCFFE7] flex flex-col justify-start items-center pt-8 pb-8 min-h-screen">
          <div className="text-center">
            <div className="font-gotham text-5xl mb-20">
              <div>Bike The</div>
              <div>Big Apple</div>
            </div>
            <img src='https://i.ibb.co/9sCPhwS/Bt-BA-Logo.png' alt="BtBA_Logo" className="mx-auto mb-25 pb-12" />
            <button className="bg-black text-white px-16 py-2 h-12 rounded-lg hover:bg-red-700 transition-colors bite-button">
              Start Biking!
            </button>
          </div>
        </div>
      );
}

export default Splash;