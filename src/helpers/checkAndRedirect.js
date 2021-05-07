import { errorAlert } from "../components/Alert/Alert";
import apiGetService from '../services/apiGetService';

export const checkAndRedirect =  ( history, path ) => {

    const whereIAm = history.location.pathname;

    // Check user against localStorage
    const { id }  = JSON.parse( localStorage.getItem('ongLoggedUser') ) || '';

    if (!id)  {

        ( whereIAm !== '/login' ) && history.push('/login');

    } else {

        try {

            // Check user against DB
            const logged  = async () => await apiGetService('users/auth/me', id );

            // Redirect to login if user isn't logged,
            // Redirect to 'path' if user is logged
            ( !logged && whereIAm !== '/login' ) ? history.push('/login') : history.push( path );
            
        } catch (err) {
            
            errorAlert();

        }

    }

}