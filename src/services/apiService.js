import axios from 'axios';

// Get token from local storage
const token = JSON.parse( localStorage.getItem('ongLoggedUser') ) || '';

// Get api url from env
const apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

if ( token !== '' ) { apiService.defaults.headers.common['authorization'] = `Bearer ${ token }`; }

export default apiService;