const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL || "http://localhost:8080"

const getAllroutes = () => {
    // console.log(URL)
    return fetch(`${URL}/route`)
    .then(res => {
        // console.log(res)
       return res.json()
    })
    .catch(err => {
        console.error(err)
    })
}
const getSingleroute = (id) => {
    return fetch(`${URL}/route/${id}`)
    .then(res => {
        return res.json()
    })
    .catch(err => console.error(err))
}

const createroute = (data) => {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {'Content-Type': "application/json"}
    }

    return fetch(`${URL}/route`)
    .then(res => res.json())
    .catch(err => console.error(err))
}


const updateroute = (id, data) => {
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {'Content-Type': "application/json"}
    }
    return fetch(`${URL}/route/${id}`, options)
        .then(res => res.json())
        .catch(err => console.error(err));
}

const deleteroute = (id) => {
    const options = {
        method: "DELETE"
    }
    return fetch(`${URL}/route/${id}`, options)
    .then(res => res.json())
}



export{
    getAllroutes,
    getSingleroute,
    createroute,
    updateroute,
    deleteroute,
}