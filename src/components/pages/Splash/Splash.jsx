import React, { useState } from 'react';
import './Splash.css';
import { useNavigate } from 'react-router-dom';
import LoadingScreen from '../../common/loadingScreen.jsx';

const Splash = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [animationName, setAnimationName] = useState('expandFromCircle');

    const handleStartBikingClick = async () => {
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, Math.random() * (3000 - 500) + 500));
        
        // setAnimationName('shrinkToCircle');
        
        setTimeout(() => {
            setIsLoading(false);
            navigate('/map');
        }, 1000);
    };

    return (
        <div className="bg-[#FCFFE7] flex flex-col justify-start items-center pt-8 pb-8 min-h-screen">
            {isLoading && <LoadingScreen animationName={animationName} />}
            <div className="text-center">
                <h1 className="font-gotham-condensed-bold text-8xl mb-20">
                    Bike The Big Apple
                </h1>
                <img src='https://i.ibb.co/9sCPhwS/BtBA-Logo.png' alt="BtBA Logo" className="mx-auto pb-7 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
                <button onClick={handleStartBikingClick} className="bg-bike-blue text-white px-16 py-2 h-12 rounded-lg hover:bg-red-700 transition-colors bite-button animate-bounce">
                    Start Biking!
                </button>
            </div>
        </div>
    );
};

export default Splash;
