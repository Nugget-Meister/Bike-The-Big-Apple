import './Map.css'
import React from 'react';
import MapWidget from './subcomponents/MapWidget';

import { Loader } from "@googlemaps/js-api-loader"

const Map = () => {

    const key = import.meta.env.VITE_API_KEY;
 



    return (
      <>
        <MapWidget/>
      </>
    );
}

export default Map;
