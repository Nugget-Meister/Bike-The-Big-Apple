const setMarker = async (mapTarget, position, title) => {

    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    let marker = new AdvancedMarkerElement({
        map: mapTarget,
        position: position,
        title: title
    })

    return marker;
}

export {
    setMarker
}