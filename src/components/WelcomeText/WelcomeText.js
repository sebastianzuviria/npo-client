import React, { useEffect, useState } from "react";
import apiGetService from '../../services/apiGetService';
import './WelcomeText.css';

const WelcomeText = () => {

  const [ welcomeTextState, setWelcomeTexState ] = useState( 'Cargando Texto de Bienvenida...' );
    
    // Here we bring organization data from DB
    useEffect(() => {

        (async () => {

            const { welcomeText } = await apiGetService('organizations/public');
            setWelcomeTexState(welcomeText);

        })()

        
    }, []);

  return (

    <div className="container text-center my-5">
      <h1 className='welcomeText__title'>
        Fundación Zonas Grises
      </h1>
      <p className="lead mt-4 welcomeText__text">
        {welcomeTextState}
      </p>
    </div>
  
  );

}


export default WelcomeText;
