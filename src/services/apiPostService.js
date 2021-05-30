import apiService from './apiService';

// Use 'type' for api sub-route and payload for object data
// Call Example: apiPostService( 'users', { ... } )
const apiPostService = async ( type, payload, config ) => {

    const response = await apiService.post(`/${ type }`, payload, config);
    return await response.data;

}

export default apiPostService;
