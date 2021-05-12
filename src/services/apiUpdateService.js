import apiService from './apiService';

// Use 'type' for api sub-route
// id isn't mandatory. Call Example: apiGetService( 'users' ), apiGetService( 'users', 1 )
const apiUpdateService = async ( type, id = '', object={} ) => {

    const response = await apiService.put(`/${ type }/${ id }`,object);
    return await response.data;

}

export default apiUpdateService;
