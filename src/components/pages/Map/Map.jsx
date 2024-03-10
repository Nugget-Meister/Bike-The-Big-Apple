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
        // renderMap();
        loadAutoComplete()
    }


    // loadAPI().then(() => loadQueue())

    return (
      <>
        <SearchBox/>
        <div id="details">S</div>
        <MapWidget/>
      </>
    );
}

export default Map;
