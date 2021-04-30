import apiService from './apiService';

// Use 'type' for api sub-route
// id isn't mandatory. Call Example: apiGetService( 'users' ), apiGetService( 'users', 1 )
const apiGetService = async ( type, id = '' ) => {

    const response = await apiService.get(`/${ type }/${ id }`);
    return await response.data;

}

export default apiGetService;
