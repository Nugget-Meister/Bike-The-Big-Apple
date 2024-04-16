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

    let request = {
        origin: start, 
        destination: end, 
        travelMode: 'BICYCLING',
        provideRouteAlternatives: false,
    }

    let route = {};

    // Generate route
    console.log(directionsService)
    
    return directionsService.route(request, (result, status) => {
        if (status == "OK") {
            directionsRenderer.setMap(currentMap)
            directionsRenderer.setDirections(result)
        }
    })

}


const calcRouteDrive = async (path) => {

    // Need to remove extra map import w/ state at some point
    const { Map } = await google.maps.importLibrary("maps");
    const { DirectionsService } = await google.maps.importLibrary("routes");

    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();

    // Init variables

    let start = new google.maps.LatLng(path.start.geometry.location.lat(),path.start.geometry.location.lng());
    let end = new google.maps.LatLng(path.destination.geometry.location.lat(),path.destination.geometry.location.lng());
    
    let request = {
        origin: start, 
        destination: end, 
        travelMode: 'DRIVING',
        provideRouteAlternatives: false,
    }
    // Generate route
    
    return directionsService.route(request, (result, status) => {
    })
}



const calcDifference = (routeA, routeB) => {
let sumBike = 0;
let sumDrive = 0;
console.log(routeA.routes[0].legs, routeB.routes[0].legs)
    for(let leg of routeA.routes[0].legs){
        sumBike += leg.distance.value
    }
    for(let leg of routeB.routes[0].legs){
        sumDrive += leg.distance.value
    }
    console.log(sumBike, sumDrive, ((sumBike-sumDrive)/sumDrive)*100)

    return (((sumBike-sumDrive)/sumDrive)*100)
}

export {
    loadRouteAPI,
    calcRouteDrive,
    calcDifference,
};
