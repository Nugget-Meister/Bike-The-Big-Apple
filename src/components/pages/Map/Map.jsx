import './Map.css'
import React from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'

import SearchBox from './subcomponents/SearchBox/SearchBox.jsx';



const Map = () => {

    const loadQueue = () => {
        renderMap();

    }


    // loadAPI().then(() => loadQueue())

    return (
      <>
        <SearchBox/>
        <MapWidget/>
      </>
    );
}

export default Map;
