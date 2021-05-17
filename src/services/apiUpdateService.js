import apiService from './apiService';

const apiUpdateService = async ( type, id, payload ) => {

    const response = await apiService.put(`/${ type }/${ id }`, payload);
    return await response.data;

}

export default apiUpdateService;
