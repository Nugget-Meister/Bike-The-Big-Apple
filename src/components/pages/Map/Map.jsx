import './Map.css'
import React, { useEffect } from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'

import SearchBox from './subcomponents/SearchBox/SearchBox.jsx';
import { loadAutoComplete } from './helpers/googleAutoComplete.js';

import { useState, createContext, useContext } from 'react';
import { PathContext } from './helpers/pathContext.js';

const Map = () => {
  const [path, setPath] = useState({
      start: {},
      destination: {}
    })

  const [firstLoad, setfirstLoad] = useState(true)

  useEffect(() => {
    console.log("current value: ", path, firstLoad)
    if(!firstLoad){
      console.log("Path updated... Reloading Queue")
      loadQueue()
    }
  },[path])

  // const path = useContext(PathContext)

    const loadQueue = () => {
        // renderMap();
        loadAutoComplete('start', 'start_details', 'Enter starting location.', path, setPath)
        loadAutoComplete('destination', 'destination_details', 'Enter starting location.', path, setPath)

    }
  

    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(path)
      // console.log(e.target.start.value)
      // console.log(e.target.destination.value)
      console.log(path.start.geometry.location.lat())
      console.log(path.start.geometry.location.lng())
      // console.log(path.destination)
      console.log(path.destination.geometry.location.lat())
      console.log(path.destination.geometry.location.lng())
    }
   

    return (
      <>
        <PathContext.Provider value={{path, setPath}}>
          <button onClick={() => loadAPI().then(() => {
              loadQueue();
              setfirstLoad(false);
              })}> Enable Queue</button>
          <br />
          <form onSubmit={handleSubmit}>
            <SearchBox id='start'/>
            <SearchBox id='destination'/>
            <div id="start_details">{'(Start not set)'}</div>
            <div id="destination_details">{'(Destination not set)'}</div>
            <button type='submit'>Submit</button>
          </form>
        </PathContext.Provider>

        <MapWidget/>
      </>
    );
}

export default Map;
