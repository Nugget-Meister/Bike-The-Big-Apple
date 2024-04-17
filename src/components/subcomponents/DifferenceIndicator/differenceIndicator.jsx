import React, { useState } from 'react';
import '../../common/loadingScreen.css';

function DifferenceIndicator({ percentage }) {

    let animList = ['', 'shrinkToCircle', 'expandFromCircle', 'simpleEase', 'alphaEaseOut']

    const [itemState, updateItemState] = useState({
        animName: animList[3],
        isHidden: false,
        bgAnim: ''
    })

    // const [animName, updateAnimName] = useState({animList[3]})

    let header, message;

    if (percentage > 0) {
        header = "Enjoy the Scenery";
        message = `Looks like our bike route is ${percentage.toFixed(0)}% longer, but we're avoiding some dangerous roads in the process.`;
    } else if(percentage < 0){
        header = "Safer and Faster";
        message = `Your bike route is ${(percentage * -1).toFixed(0)}% shorter... and safer!`;
    } else {
        header = "Safest route possible"
        message = "We crunched the numbers and you are getting the safest route possible!"
    }


    const hideElement = async () => {
        updateItemState({
            ...itemState, 
            animName: animList[1],
            bgAnim: animList[4],
        })
        setTimeout(() => {
            updateItemState({...itemState, isHidden: true})
        }, 800);
    }

    return (
    <div 
        style={{
            animation: `${itemState.animName} 1s ease-in-out`,
        }}
        className={`z-30 fixed items-center top-64 justify-center min-h-screen ${itemState.isHidden ? "hidden": ""}`}>
        <div 
            style={{
                animation: `${itemState.bgAnim} 1s ease-in-out both`,
            }}
            className="w-3/4 mx-auto bg-bike-off-white shadow-2xl rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">{header}</h1>
            <p className="text-lg mb-6">{message}</p>
            <button
                onClick={() => {hideElement()}} 
                className="bg-bike-blue hover:bg-bike-light-blue text-white font-bold py-2 px-4 rounded">
                Take a Bike!
            </button>
        </div>
    </div>
    );
}

//EXAMPLE IS HERE -JJ
//<DifferenceIndicator differenceValue="higher" percentage={15} />
//<DifferenceIndicator differenceValue="lower" percentage={10} />

export default DifferenceIndicator;
