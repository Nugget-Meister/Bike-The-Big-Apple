import React, { useState } from "react";

const BonkButton = ({ rerouteDestination }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="fixed inset-x-0 bottom-10 flex justify-center">
        <button
          className="bg-apple-red hover:bg-blue-700 text-xl text-white font-bold py-6 px-10 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          Bonk
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-bike-off-white rounded-lg shadow-lg w-4/5 p-6 relative">
            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4 text-center">Bonking?</h2>
            <p className="text-lg mb-6">
              Let's fix that. Reroute to {rerouteDestination} now.
            </p>
            <div className="flex justify-around">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Reroute now
              </button>
              <button
                className="bg-red-700 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BonkButton;
