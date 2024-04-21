const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

console.log(URL)
const getUserInfo = (email) => {
    console.log(`${URL}userStatistics/email/${email}`)
    return fetch(`${URL}userStatistics/email/${email}`)
    .then(res => res.json())
    .catch(err => console.err(err))
}


const createUser = async (email) => {
    const options = {
        method: 'POST',
        body: JSON.stringify({
            total_distance: 1022,
            routes_completed: 2,
            average_elevation: 0,
            route_avoided: 0, 
            total_checkpoints: 0,
            user_email: email
        }),
        headers: {'Content-Type': "application/json" }
    };



    return getUserInfo(email).then((res)=> {
        let checkUser = res.data.user_email
        console.log()
        if(!checkUser){
            return fetch(`${URL}userStatistics`, options)
            .then(res=> res.json())
            .catch(err => console.err(err))
        } else {
            return true
        }
    })
  

}

export {
    getUserInfo,
    createUser
}