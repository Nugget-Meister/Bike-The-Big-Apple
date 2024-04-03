import React, { useState } from 'react';
import { getUserCoords } from './Map/helpers/userTracker';
import { useEffect, useRef } from 'react';

const Testing = () => {
    let interval;

    let trackerRef = useRef(true)
    const [isTracking, setIsTracking] = useState(trackerRef);


    const timeout = 5000
  

    const trackUser = async () => {
        console.log("Attempting to track user", "isTracking:", isTracking, trackerRef.current)
        if(trackerRef.current){
            interval = setInterval(() => {
                console.log("Tracker Status: ",trackerRef.current)
                getUserCoords().then((res)=>{
                    console.log(res)
                })
                if(!trackerRef.current){
                    clearInterval(interval)
                }
           }, timeout)
        }
    }



    useEffect(() => {
       
        }, [])

        
        return (
            <div>
                <button 
                    onClick={() => {
                        trackerRef.current = !trackerRef.current
                        setIsTracking(trackerRef.current)
                        console.log(trackerRef.current)

                    }

                    }
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    >
                        Bingus:  {isTracking ? "Bongus": "Shmongus"}
                </button>
                <br />
                <br />
                <button 
                    onClick={() => trackUser()}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        track User
                </button>


            </div>
        );
}

export default Testing;
