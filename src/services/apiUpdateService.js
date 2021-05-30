import apiService from './apiService';

const apiUpdateService = async ( type, id, payload, config ) => {

    const response = await apiService.put(`/${ type }/${ id }`, payload, config);
    return await response.data;

}

export default apiUpdateService;
