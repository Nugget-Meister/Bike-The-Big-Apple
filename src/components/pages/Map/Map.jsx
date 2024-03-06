import './Map.css'
import React from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'


const Map = () => {

    loadAPI().then(() => renderMap())


    return (
      <>
        <MapWidget/>
      </>
    );
}

export default Map;
