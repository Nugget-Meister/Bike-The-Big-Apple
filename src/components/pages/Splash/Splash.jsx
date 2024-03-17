import React from 'react';
// import "../map"

const Splash = () => {
    return (
        <div className="bg-[#FCFFE7] flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="font-gotham text-5xl mb-20">
              <div>Bike The</div>
              <div>Big Apple</div>
            </div>
            <img src='https://i.ibb.co/9sCPhwS/Bt-BA-Logo.png' alt="Logo" className="mx-auto mb-25" />
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
              Start Biking!
            </button>
          </div>
        </div>
      );
}

export default Splash;