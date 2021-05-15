import React from "react";
import './WelcomeText.css';

//welcome title

const welcome = {

    title: "Bienvenido a nuestra página",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero non libero luctus feugiat. Aliquam erat volutpat. Integer et dapibus nibh, at aliquam urna. Fusce faucibus lacus sit amet tellus bibendum elementum. Phasellus elit nunc, ornare nec ultrices sit amet, imperdiet at eros. Praesent sem nisl, euismod vel urna ut, mollis gravida est. Etiam ut velit at leo venenatis. ",

};

function WelcomeText() {

  return (

    <div className="welcomeText__container">

        <div className="welcomeText__box-container">

          <h3 className="welcomeText__h3">{welcome.title}</h3>

          <p className="welcomeText__p">{welcome.text}</p>

        </div>

    </div>
  
  );

}


export default WelcomeText;
