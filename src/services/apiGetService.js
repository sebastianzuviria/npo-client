import apiService from './apiService';

// Use 'type' for api sub-route) 
// id isn't mandatory. Call Example: getService( 'users' )
const apiGetService = async ( type, id = '' ) => {

    const response = await apiService.get(`/${ type }/${ id }`);
    return await response.data;

}

export default apiGetService;
