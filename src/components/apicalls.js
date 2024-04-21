const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL


const getUserInfo = (email) => {
    return fetch(`${url}/${email}`)
}