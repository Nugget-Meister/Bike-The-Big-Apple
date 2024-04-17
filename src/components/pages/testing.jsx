import React, { useState } from 'react';
import { getUserCoords } from './Map/helpers/userTracker';
import { useEffect, useRef } from 'react';
import NavCard from './Map/subcomponents/NavCard/NavCard';
import DifferenceIndicator from '../subcomponents/DifferenceIndicator/differenceIndicator.jsx';
import { data } from './testdata.js';

const Testing = () => {
   
    // Navigation steps
    
    let testString = data.routes[0].legs[0].steps;
    // let [currentStep,updateCurrentStep] = useState(0)

    let [instructions, setInstructions] = useState({
        steps: data.routes[0].legs[0].steps,
        currentStep: 0
    })
   
    // console.log(testString)
    // console.log(data.routes[0].legs[0])
    // console.log(data.routes[0].legs[0].steps)
    // console.log(testString.replaceAll("<b>","").replaceAll("</b>",""))

   
   
   
    // User Tracking
   
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
            <div className='shmongus'>

                <DifferenceIndicator percentage={-13}/>
                {/*  map into opject to return list */}
                {/* {testString.map((step)=> {
                    return <NavCard text={step.instructions.replaceAll("<b>","").replaceAll("</b>","")}/>
                })} */}

                {/* <NavCard 
                    // text={testString[0].instructions.replaceAll("<b>","").replaceAll("</b>","")}
                    state={instructions}
                    setState={setInstructions}
                /> */}

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
