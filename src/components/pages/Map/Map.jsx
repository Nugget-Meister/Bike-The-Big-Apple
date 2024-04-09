import './Map.css'
import React, { useEffect } from 'react';
import MapWidget from './subcomponents/MapWidget';
import {
    loadAPI, 
    renderMap,
} from './helpers/googleApiCalls.js'

import { loadAutoComplete } from './helpers/googleAutoComplete.js';
import SearchBox from './subcomponents/SearchBox/SearchBox.jsx';

import { useState, createContext, useContext } from 'react';
import { PathContext } from './helpers/pathContext.js';
import { loadRouteAPI } from './helpers/googleRoute.js';

import Form from '../../common/Form/Form.jsx';
import Card from '../../common/Card/Card.jsx';
import Button from '../../common/Button/Button.jsx';

import NavCard from './subcomponents/NavCard/NavCard.jsx';
import EndCard from './subcomponents/EndCard/EndCard.jsx';



const Map = () => {

  

  const [path, setPath] = useState({
      start: {},
      destination: {}
    })

  const [firstLoad, setfirstLoad] = useState(true)


  useEffect(() => {
   
    if(!firstLoad){
      console.log("Path updated... Reloading Queue")
      loadQueue()
    }
  },[path])

  // const path = useContext(PathContext)

  const [mapState, setMapState] = useState({
    tracking: false,
    endedRoute: false,
    steps: {},
    currentStep: 0
  })

  const loadQueue = () => {
      console.log("current value: ", path, firstLoad)
      if(firstLoad){
        setfirstLoad(false);
        renderMap();
      }
        loadAutoComplete('start', 'start_details', 'Enter starting location.', path, setPath)
        loadAutoComplete('destination', 'destination_details', 'Enter starting location.', path, setPath)

    }
  
    const endRoute = () =>  {
      setMapState({...mapState, tracking:false, endedRoute:true})
    }

    const handleSubmit = (e) => {
      e.preventDefault()


      if(!firstLoad){
        loadRouteAPI(path).then((res) => {
          setMapState(
            {
              ...mapState,
              tracking: true, 
              steps: res.routes[0].legs[0].steps
            })
        })
      }

      
    }
   
    // console.log(path.start.formatted_address != undefined)

    let buttonClassName = "w-full bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    return (
      <>
        <PathContext.Provider value={{path, setPath}}>

          {firstLoad ? (
          <>
            <button onClick={() => loadAPI().then(() => {
              loadQueue();
              })}> Enable Queue</button>
            <br />
          </>
          ):(<></>)}
          
          {!mapState.tracking && !mapState.endedRoute ? (
            <>
              <Card className={""}>
                <Form onSubmit={handleSubmit}>
                  <SearchBox id='start'/>
                  <div classname="pb-2" id="start_details">{''}</div>
                  <SearchBox id='destination'/>
                  <div classname="pb-2" id="destination_details">{''}</div>
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

          {mapState.tracking && !mapState.endedRoute ? (
            <>
              <NavCard 
                  state={mapState}
                  setState={setMapState}
              />
              <button 
              onClick={()=> endRoute()}
              className={buttonClassName}>End Route</button>
            </>): null}
        {!mapState.tracking && mapState.endedRoute ? (
          <>
            <EndCard state={mapState} setState={setMapState}/>
          </>): null}
          
        </PathContext.Provider>
        <MapWidget/>
      </>
    );
}

export default Map;
