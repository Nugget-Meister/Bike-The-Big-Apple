import React from 'react';
import { Loader } from "@googlemaps/js-api-loader"
 



const loadAPI = (options) => {
    const key = import.meta.env.VITE_API_KEY;
    let additionalOptions = options || {}

    const loader = new Loader({
        apiKey: key,
        version: "weekly",
        ...additionalOptions
    })

    return loader.load()
}




const renderMap = async (coords) => {
    const { Map } = await google.maps.importLibrary("maps");


        let map = new Map(document.getElementById("map"), {
        center: coords || {lat: 40.7414836, lng: -73.9489162},
        zoom: 12
    })

    return map;
}


// const renderRoute = async (start, end) => {
//     //convert to latlng
//     /**
//      * start = new google.maps.LatLng(latitude, longitude)
//      * endn = new google.maps.LatLng(latitude, longitude)
//      */


//     // {lat: number, lng: number}
//     const { Map } = await google.maps.importLibrary('maps');
//     const { DirectionsService } = await google.maps.importLibrary('routes')

//     let directionsService = new google.maps.DirectionsService()
//     let directionsRenderer = new google.maps.DirectionsRenderer()

//     let mapOptions = {
//         zoom: 6,
//         center: start
//     }

//     let request = {
//         origin: start,
//         destination: end,
//         travelMode: 'BICYCLING',
//         provideRouteAlternatives: false
//     }






// }


export  {
    loadAPI,
    renderMap
}
