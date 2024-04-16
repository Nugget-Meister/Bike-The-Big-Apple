import React from 'react';

function DifferenceIndicator({ differenceValue, percentage }) {

    let header, message;

    if (differenceValue === 'higher') {
        header = "Enjoy the Scenery";
        message = `Looks like our bike route is ${percentage}% longer, but we're avoiding some dangerous roads in the process.`;
    } else {
        header = "Safer and Faster";
        message = `Your bike route is ${percentage}% shorter... and safer!`;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
        <div className="w-3/4 mx-auto bg-bike-off-white shadow-2xl rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">{header}</h1>
            <p className="text-lg mb-6">{message}</p>
            <button className="bg-bike-blue hover:bg-bike-light-blue text-white font-bold py-2 px-4 rounded">
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
