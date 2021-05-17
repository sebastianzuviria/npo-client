import apiService from './apiService';

// Use 'type' for api sub-route
// id isn't mandatory. Call Example: apiGetService( 'users' ), apiGetService( 'users', 1 )
const apiDeleteService = async ( type, id = '' ) => {

    const response = await apiService.delete(`/${ type }/${ id }`);
    return await response.data;

}

export default apiDeleteService;
