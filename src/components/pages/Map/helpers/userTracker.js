

const getUserCoords = async () => {

  let tries = 0;

  const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    
    const promise = new Promise((resolve, reject)=>{
        function success(pos) {
            const crd = pos.coords;
            console.log("success.")
          //   console.log("Your current position is:");
          //   console.log(`Latitude : ${crd.latitude}`);
          //   console.log(`Longitude: ${crd.longitude}`);
          //   console.log(`More or less ${crd.accuracy} meters.`);
            resolve(crd)
        }
          
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`, 'Request timed out.');
            tries++
            console.log(tries, "times tried")
            if (tries <= 3) {
                performGet()
            } else {
                console.error("Max tries exceeded from timeout.")
                resolve(404)
            }
        }
    
       const performGet = async () => {
            if("geolocation" in navigator){
                navigator.geolocation.getCurrentPosition(success, error, options)
            } else {
                console.error("Geolocation not detected or available on machine.")
            }
            
       }

          performGet()

  })

 return promise.then((res) => {
  return res
 })

    
}

export {
  getUserCoords
}


