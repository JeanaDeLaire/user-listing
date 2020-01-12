const axios = require('axios').default;

export const fetchTwentyUsers = () => {
    // Make a request for a user with a given ID
    return axios.get('https://randomuser.me/api/?results=20', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}
