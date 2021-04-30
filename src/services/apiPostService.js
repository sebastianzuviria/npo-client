import apiService from './apiService';

// Use 'type' for api sub-route and payload for object data
// Call Example: postService( 'users', { ... } )
const apiPostService = async ( type, payload ) => {

    const response = await apiService.post(`/${ type }`, payload);
    return await response.data;

}

export default apiPostService;
