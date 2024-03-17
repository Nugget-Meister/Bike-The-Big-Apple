import React from 'react';

/**
 * 
 * @param {string} input_id id for input box
 * @param {string} text - placeholder text to use
 * @param {string} target_id id to send target html to
 */


let { Places } = false;



const loadAutoComplete = async (input_id, target_id, text) => {

    if(!Places){
         Places = await google.maps.importLibrary("places")
    }
    // const { Places } = await google.maps.importLibrary("places")


    let autoComplete = new google.maps.places.Autocomplete(
        document.getElementById(input_id),
        {
            types: ['establishment'],
            componentRestrictions: {'country': ['US']},
            fields: ['place_id', 'formatted_address', 'name' ,'geometry']
        }
    )

    const onPlaceChanged = () => {
        const place = autoComplete.getPlace();
        
        if(!place.geometry) {
            // No selected prediction, reset to default
            document.getElementById(id).placeholder = text
        } else {
            // Display details
            console.log(place)
            document.getElementById(target_id).innerHTML = place.formatted_address;
        }

    }

    autoComplete.addListener('place_changed', onPlaceChanged);
    
}


export {
    loadAutoComplete
}