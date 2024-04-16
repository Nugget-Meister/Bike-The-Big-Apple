import './Map.css'
import React, { useEffect } from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'

import { loadAutoComplete } from './helpers/googleAutoComplete.js';
import { setMarker, updateMarker, hideMarker } from './helpers/googlePointer.jsx';
import SearchBox from './subcomponents/SearchBox/SearchBox.jsx';

import { useState, useRef, createContext, useContext } from 'react';
import { PathContext } from './helpers/pathContext.js';
import { loadRouteAPI, calcRouteDrive, calcDifference } from './helpers/googleRoute.js';
import { getUserCoords } from './helpers/userTracker.js';

import Form from '../../common/Form/Form.jsx';
import Card from '../../common/Card/Card.jsx';
import Button from '../../common/Button/Button.jsx';

import NavCard from './subcomponents/NavCard/NavCard.jsx';
import EndCard from './subcomponents/EndCard/EndCard.jsx';

import LoadingScreen from '../../common/loadingScreen.jsx';



const Map = () => {

  

  const [path, setPath] = useState({
      start: {},
      destination: {}
    })
  const [firstLoad, setfirstLoad] = useState(true)


  useEffect(() => {
   
    if(firstLoad){
      loadAPI().then(() => {
        loadQueue()
    })
  }

    if(!firstLoad){
      console.log("Path updated... Reloading Queue")
      loadQueue()
    }

    // console.log(mapState)
  },[path])

  // const path = useContext(PathContext)

  const [mapState, setMapState] = useState({
    isTracking: false,      // is currently tracking user?
    endedRoute: false,    // check if route is ended
    selectedRoute: false, // check if route is finalized
    steps: {},            // listed steps in route
    currentStep: 0,       // index for current step in route
    activeMap: false,     // holds reference to loaded map
    userMarker: null
  })

  // Refs for use when refresh is not wanted.
  let appRef = useRef({
    isTracking: false,
    timeout: 5000,
    userMarker: null
  })


  // User Tracker

  const trackUser = async () => {
    // console.log("Attempting to track user", "isTracking:", mapState.isTracking, appRef.current.isTracking)

    console.log(appRef.current.isTracking)
    if(appRef.current.isTracking){
      let interval = setInterval(() => {
            // console.log("Tracker Status: ", appRef.current.isTracking)
            getUserCoords().then((res)=>{
              // console.log(res)
              const markerCoords = {
                lat: res.latitude,
                lng: res.longitude,
              };
                console.log(markerCoords)
                if(appRef.current.userMarker){
                  // console.log("updating marker")
                  updateMarker(appRef.current.userMarker, markerCoords)
                } else{
                  // console.log("new marker")
                  setMarker(mapState.activeMap, markerCoords, "You")
                  .then((res) => {
                    console.log(res)
                    appRef.current.userMarker = res
                  })
                }
            })
            if(!appRef.current.isTracking){
                clearInterval(interval)
                hideMarker(appRef.current.userMarker)
            }
       }, appRef.current.timeout)
    }
  }



  const loadQueue = () => {
      console.log("current value: ", path, firstLoad)
      if(firstLoad){
        setfirstLoad(false);
        renderMap()
        .then(res => {
          setMapState({
            ...mapState,
            activeMap: res
          })
        })
      }


    // Load/reload autocompletes if route is not finalized
      if(!mapState.selectedRoute){
        loadAutoComplete('start', 'start_details', 'Enter starting location.', path, setPath)
        loadAutoComplete('destination', 'destination_details', 'Enter starting location.', path, setPath)
      }

    }
  

  const endRoute = () =>  {
    setMapState({...mapState, isTracking:false, endedRoute:true});
    appRef.current.isTracking = false
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    if(!firstLoad){
      console.log(1)
      loadRouteAPI(path, mapState.activeMap)
      .then((res) => {
        console.log(res)
        setMapState(
          {
            ...mapState,
            selectedRoute: true,
            isTracking: true, 
            steps: res.routes[0].legs[0].steps
          });
          appRef.current.isTracking = true
          return res
      })
      .then((res1) => {
        console.log(2)
        trackUser()
        return res1
      }).then((resA) => {
        calcRouteDrive(path).then(((resB) => {
         console.log(calcDifference(resA, resB))
        }))
      })




    }

      
    }
   


    let buttonClassName = "w-full bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    
    
    return (
      <>
        <PathContext.Provider value={{path, setPath}}>
          <LoadingScreen animationName={"shrinkToCircle"}/>

          {firstLoad ? (
          <>
            <button onClick={() => loadAPI().then(() => {
              loadQueue();
              })}> Enable Queue</button>
            <br />
          </>
          ):(<></>)}
          
          {!mapState.isTracking && !mapState.endedRoute ? (
            <>
              <Card className={""}>
                <Form onSubmit={handleSubmit}>
                  <SearchBox id='start'/>
                  <div className="pb-2 text-white" id="start_details">{''}</div>
                  <SearchBox id='destination'/>
                  <div className="pb-4 text-white" id="destination_details">{''}</div>
                  <Button 
                    type='submit'
                    className={
                      path.start.formatted_address != undefined && path.destination.formatted_address != undefined ? buttonClassName + " animate-bounce" : buttonClassName
                    }
                    >
                      Submit
                  </Button>
                </Form>
              </Card>
            </>) : null}

          {mapState.isTracking && !mapState.endedRoute ? (
            <>
              <NavCard 
                  state={mapState}
                  setState={setMapState}
              />
              <button 
              onClick={()=> endRoute()}
              className={buttonClassName + " absolute z-30"}>End Route</button>
            </>): null}
        {!mapState.isTracking && mapState.endedRoute ? (
          <>
            <EndCard state={mapState} setState={setMapState}/>
          </>): null}

        {/* <button 
          className='bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' 
          onClick={()=>{
            setMarker(mapState.activeMap, {lat: 40.7414836, lng: -73.9489162},"bing bong" )
            .then(res => {
              // console.log(res)
              // console.log(res.position)
              setMapState({
                ...mapState, 
                userMarker: res}
                )
            })            
            }
              }>Marker</button> */}

          
        </PathContext.Provider>
        <MapWidget/>
      </>
    );
}

export default Map;
