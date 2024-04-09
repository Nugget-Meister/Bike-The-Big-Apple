import React from 'react';
import './loadingScreen.css';
import { pinwheel } from 'ldrs';

pinwheel.register();

const LoadingScreen = ({ animationName }) => (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(43,53,103,255)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        animation: `${animationName} 1.5s ease forwards`,
      }}>
    <div style={{ animation: 'bubblePop 2s ease-in-out infinite' }}>
      <l-pinwheel size="150" stroke="5" speed="1.8" color="rgba(252,254,231,255)"></l-pinwheel>
    </div>
  </div>
);

export default LoadingScreen;
