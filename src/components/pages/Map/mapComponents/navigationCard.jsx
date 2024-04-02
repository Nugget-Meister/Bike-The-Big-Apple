import React from 'react'

//"step" will be the initial data from the route -JJ
export default function navigationCard(step) {
  return (
    <div className="animation-slideRight fixed top-10 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-lg shadow-md">
      <p>{step.description}</p>
    </div>
  )
}