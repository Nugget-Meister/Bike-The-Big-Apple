import React from 'react';


const loadRouteAPI = async (path) => {

    // Need to remove extra map import w/ state at some point
    const { Map } = await google.maps.importLibrary("maps");
    const { DirectionsService } = await google.maps.importLibrary("routes");

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();

    // Init variables

    let start = new google.maps.LatLng(path.start.geometry.location.lat(),path.start.geometry.location.lng());
    let end = new google.maps.LatLng(path.destination.geometry.location.lat(),path.destination.geometry.location.lng());

    let mapOptions = {
        zoom: 7,
        center: start
    }

    let map = new google.maps.Map(document.getElementById('map'), mapOptions)
    
    let request = {
        origin: start, 
        destination: end, 
        travelMode: 'BICYCLING',
        provideRouteAlternatives: false,
    }

    // Generate route

    directionsService.route(request, (result, status) => {
        if (status == "OK") {
            console.log(result)
            directionsRenderer.setMap(map)
            directionsRenderer.setDirections(result)
        }
    })


    // console.log(path.start.geometry.location.lat())
    // console.log(path.start.geometry.location.lng())
    // console.log(path.destination.geometry.location.lat())
    // console.log(path.destination.geometry.location.lng())



     
}


export {
    loadRouteAPI,
};
