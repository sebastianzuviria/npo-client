import apiService from './apiService';

const apiUpdateService = async ( type, payload ) => {

    const response = await apiService.update(`/${ type }`, payload);
    return await response.data;

}

export default apiUpdateService;