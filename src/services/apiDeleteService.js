import apiService from './apiService';

const apiDeleteService = async ( type, id ) => {

    const response = await apiService.delete(`/${ type }/ ${id}`);
    return await response.data;

}

export default apiDeleteService;
