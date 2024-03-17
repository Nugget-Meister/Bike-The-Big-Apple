import React, { useContext } from 'react';

let { Places } = false;



/**
 * Fn for autocomplete functions
 * @param {string} input_id - id for input box.
 * @param {string} text - placeholder text to use
 * @param {string} target_id id to send target html to
 * @param {object} state - State to target and update
 * @param {Function} update -  invoker to update selected state
 */
const loadAutoComplete = async (input_id, target_id, text, state, update ) => {

    
    if(!Places){
         Places = await google.maps.importLibrary("places")
    }
    // const { Places } = await google.maps.importLibrary("places")


    if(!state[input_id].formatted_address){     
        let autoComplete = new google.maps.places.Autocomplete(
            document.getElementById(input_id),
            {
                types: ['establishment'],
                componentRestrictions: {'country': ['US']},
                fields: ['place_id', 'formatted_address', 'name' ,'geometry']
            }
        )

        const onPlaceChanged = async () => {
            const place = autoComplete.getPlace();
            
            if(!place.geometry) {
                // No selected prediction, reset to default
                document.getElementById(id).placeholder = text;
            } else {
                // Display details
                console.log(state)
                console.log({...state, [input_id]: place})
                update({...state, [input_id]: place})
                // This should be done in a more react way.
                document.getElementById(target_id).innerHTML = place.formatted_address;
            }
    
        }
    
        autoComplete.addListener('place_changed', onPlaceChanged);
    }
    
}


export {
    loadAutoComplete
}