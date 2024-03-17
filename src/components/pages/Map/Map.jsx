import './Map.css'
import React from 'react';
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

  // const path = useContext(PathContext)

    const loadQueue = () => {
        // renderMap();
        loadAutoComplete('start', 'start_details', 'Enter starting location.', setPath)
        // loadAutoComplete('destination', 'destination_details', 'Enter starting location.', setPath)

    }
  

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(e.target.start.value)
      console.log(e.target.destination.value)
    }
   

    return (
      <>
        <PathContext.Provider value={{path, setPath}}>
          <button onClick={() => loadAPI().then(() => loadQueue())}> Enable Queue</button>
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
