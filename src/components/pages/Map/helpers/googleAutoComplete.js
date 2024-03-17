import React from 'react';



const loadAutoComplete = async () => {
    const { Places } = await google.maps.importLibrary("places")


    let autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
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
            document.getElementById('autocomplete').placeholder = 'Enter a place.'
        } else {
            // Display details
            document.getElementById('details').innerHTML = place.formatted_address;
            console.log(place)
        }

    }

    autoComplete.addListener('place_changed', onPlaceChanged);
    
}

const hookAutoComplete = (id, text) => {
    
}




export {
    loadAutoComplete
}