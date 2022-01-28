
const apiURL = `/api`

export const API = {
    
    chatrooms: {
        // list: `${apiURL}/countries/`,
        // create: `${apiURL}/create-countries/`,
        retrieve: id => `${apiURL}/chatRooms/${id}/`
        // update: id => `${apiURL}/countries/${id}/update/`,
       
    }
}