
// import bikeIcon from './../../../assets/bike-svgrepo-com.svg'
import bikeIcon from './../../../../../public/bike-svgrepo-com.svg'







const setMarker = async (mapTarget, position, title) => {
    
    
    const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
    
    // Establish glyph import & elements
    // let glyphImg = (<img src={bikeIcon}/>)

    let glyphImg = document.createElement("img")
    glyphImg.src = bikeIcon;
    glyphImg.style.width = "100%";
    glyphImg.style.height = "100%";



    const glyphPinElement = new PinElement({
        glyph: glyphImg,
        scale: 1.5
    })

    let marker = new AdvancedMarkerElement({
        map: mapTarget,
        position: position,
        title: title,
        content: glyphPinElement.element
    })

    return marker;
}

const updateMarker = async (marker, position, title) => {

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    marker.position = position;

    return marker;
}

const hideMarker = async (marker) => {
    marker.map = null
}


export {
    setMarker,
    updateMarker,
    hideMarker
}
