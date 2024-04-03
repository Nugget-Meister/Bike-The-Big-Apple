import React from 'react';

const SavedRoutes = () => {

    return (
        <div className="bg-bike-blue">
            <div className="p-4 text-left text-white">
                <h1 className="text-2xl">Saved Routes</h1>
            </div>

            <div className="flex overflow-x-auto py-4 space-x-4 snap-x snap-mandatory" style={{scrollBehavior: "smooth"}}>
                {/* THIS IS FOR THE CARD COMPONENTS, USING HARD CODED DUMMY DATA -JJ*/}
                <div className="flex space-x-4 pl-4">
                    {/* LOGIC HELP NEEDED -JJ */}
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="snap-center shrink-0 w-60 h-40 bg-bike-off-white text-xl rounded-lg p-4">
                            <p>Route Name</p>
                            <p>Distance: 22.3 miles</p>
                            <p>Time: 12:32</p>
                        </div>
                    ))}
                </div>

            </div>

            <div className="my-4 mx-auto w-11/12 border-b-2 border-white"></div>

            <div className="text-center py-4">
                <img src="https://i.ibb.co/dctw49L/istockphoto-1046752852-612x612.jpg" alt="Map" className="w-full h-auto"/>
                <h2 className="text-5xl text-left p-4 text-white mt-1">MUSEUM</h2>

                <div className="flex justify-center items-center">
                    <div className="text-white pr-8 text-left text-2xl p-4">
                        <p>Distance</p>
                        <p>Estimated Time</p>
                        <p>Checkpoints</p>
                        <p>Start</p>
                        <p>End</p>
                    </div>
                    <div className="border-r-2 border-white h-48"></div>
                    <div className="text-white pl-8 text-2xl text-left p-4">
                        <p>22.3 miles</p>
                        <p>12:32</p>
                        <p>8</p>
                        <p>XYZ Drive</p>
                        <p>Museum Address</p>
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mt-4">
                
                    <button className="bg-blue-200 text-white px-4 py-2 rounded">Unsave Route</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Directions</button>
                </div>
            </div>
        </div>
    );
}

export default SavedRoutes;
