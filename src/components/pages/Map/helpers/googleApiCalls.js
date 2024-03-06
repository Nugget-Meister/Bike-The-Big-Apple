import React from 'react';
import { Loader } from "@googlemaps/js-api-loader"
 



const loadAPI = (options) => {
    const key = import.meta.env.VITE_API_KEY;
    const options = options || {}

    const loader = new Loader({
        apiKey: key,
        version: "weekly",
        ...options
    })

    return loader.load()
}

const renderMap = async (coords) => {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: coords || {lat: -34.397, lng: 150.644}
    })
}


export default {
    loadAPI,
    renderMap
};
