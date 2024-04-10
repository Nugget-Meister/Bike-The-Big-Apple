import React from 'react';


const loadRouteAPI = async (path, currentMap) => {

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
        center: start,
        mapId: "907719a626af6b66"
    }

    // let map = new google.maps.Map(document.getElementById('map'), mapOptions)
    
    let request = {
        origin: start, 
        destination: end, 
        travelMode: 'BICYCLING',
        provideRouteAlternatives: false,
    }

    let route = {};

    // Generate route

    let returnedObject = {
        route: 1
    }
    
    return directionsService.route(request, (result, status) => {
        if (status == "OK") {
            // console.log(result)
            directionsRenderer.setMap(currentMap)
            directionsRenderer.setDirections(result)
            route = result
        }
    })

    // return result

    // console.log(path.start.geometry.location.lat())
    // console.log(path.start.geometry.location.lng())
    // console.log(path.destination.geometry.location.lat())
    // console.log(path.destination.geometry.location.lng())



     
}


export {
    loadRouteAPI,
};
