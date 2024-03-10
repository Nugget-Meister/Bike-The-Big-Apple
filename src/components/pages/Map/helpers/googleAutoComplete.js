import React from 'react';





const loadAutoComplete = async () => {
    const { Places } = await google.maps.importLibrary("places")

    let autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: [''],
            componentRestrictions: {'country': ['US']},
            fields: ['formatted_address', ]
        }
    )
}




export {
    loadAutoComplete
}