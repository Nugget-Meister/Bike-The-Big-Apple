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

    const loadQueue = () => {
      console.log("current value: ", path, firstLoad)
      if(firstLoad){
        setfirstLoad(false);
        renderMap();
      }
        loadAutoComplete('start', 'start_details', 'Enter starting location.', path, setPath)
        loadAutoComplete('destination', 'destination_details', 'Enter starting location.', path, setPath)

    }
  

    const handleSubmit = (e) => {
      e.preventDefault()
      // console.log(path)
      
      // console.log("bing bong")
      // console.log(e.target.start.value)
      // console.log(e.target.destination.value)
      // console.log(path.destination)
      // console.log(path.start.geometry.location.lat())
      // console.log(path.start.geometry.location.lng())
      // console.log(path.destination.geometry.location.lat())
      // console.log(path.destination.geometry.location.lng())
      loadRouteAPI(path)
    }
   

    return (
      <>
        <PathContext.Provider value={{path, setPath}}>
          <button onClick={() => loadAPI().then(() => {
              loadQueue();
              })}> Enable Queue</button>
          <br />
          <Card>
            <Form onSubmit={handleSubmit}>
              <SearchBox id='start'/>
              <SearchBox id='destination'/>
              <div id="start_details">{'(Start not set)'}</div>
              <div id="destination_details">{'(Destination not set)'}</div>
              <Button 
                type='submit'
                className="w-full bg-custom-red hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
              </Button>
            </Form>
          </Card>
        </PathContext.Provider>
        <MapWidget/>
      </>
    );
}

export default Map;
