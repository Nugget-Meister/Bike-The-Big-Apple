const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

console.log(URL)
const getUserInfo = (email) => {
    console.log(`${URL}userStatistics/email/${email}`)
    return fetch(`${URL}userStatistics/email/${email}`)
    .then(res => res.json())
    .catch(err => console.err(err))
}

export {
    getUserInfo
}