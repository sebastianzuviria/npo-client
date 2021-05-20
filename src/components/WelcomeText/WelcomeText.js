import React from "react";
import './WelcomeText.css';

const WelcomeText = () => {

  return (

    <div className="container text-center my-5">
      <h1 className='welcomeText__title'>
        ¡Bienvenid@ a nuestra página!
      </h1>
      <p className="lead mt-4">
        Lorem ipsum dolor sit amet, consectetur <strong>adipiscing</strong> elit. Vestibulum mattis libero non libero luctus feugiat. Aliquam erat volutpat. Integer et dapibus nibh, at aliquam urna. Fusce faucibus lacus sit amet <strong>tellus</strong> bibendum elementum. Phasellus elit nunc, ornare nec <strong>ultrices</strong> sit amet, imperdiet at eros. Praesent sem nisl, euismod vel urna ut, mollis gravida est. <strong>Etiam</strong> ut velit at leo venenatis.
      </p>
    </div>
  
  );

}


export default WelcomeText;
