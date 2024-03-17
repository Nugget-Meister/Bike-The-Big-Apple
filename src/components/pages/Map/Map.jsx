import './Map.css'
import React from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'

import SearchBox from './subcomponents/SearchBox/SearchBox.jsx';
import { loadAutoComplete } from './helpers/googleAutoComplete.js';

const Map = () => {

    const loadQueue = () => {
        renderMap();
        loadAutoComplete('start', 'start_details', 'Enter starting location.')
        // loadAutoComplete('destination', 'destination_details', 'Enter starting location.')

    }




   

    return (
      <>
        <button onClick={() => loadAPI().then(() => loadQueue())}> Enable Queue</button>
        <br />
        <form action="">
          <SearchBox id='start'/>
          <SearchBox id='destination'/>
          <div id="start_details">{'(Start not set)'}</div>
          <div id="destination_details">{'(Destination not set)'}</div>
          <button type='submit'>Submit</button>
        </form>

        <MapWidget/>
      </>
    );
}

export default Map;
