//import apiGetService from '../services/apiGetService';

/*const userLogged =  () => {

    // Check user against localStorage
    const { id }  = JSON.parse( localStorage.getItem('ongLoggedUser') ) || '';

    if (!id)  {

        return false;

    } else {

        try {

            // Check user against DB
            const logged  = async () => await apiGetService('users/auth/me', id );

            return ( logged ) ? true : false;
            
        } catch (err) {
            
            return false;

        }

    }

}*/
const userLogged = () => {
  const user = JSON.parse(localStorage.getItem('ongLoggedUser'));
  return user || false;
};

export default userLogged;
