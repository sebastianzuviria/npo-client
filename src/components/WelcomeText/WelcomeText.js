import React from "react";
import './WelcomeText.css';

//welcome title

const welcome = {

    title: "¡Bienvenido a nuestra página!",
    text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero non libero luctus feugiat. Aliquam erat volutpat. Integer et dapibus nibh, at aliquam urna. Fusce faucibus lacus sit amet tellus bibendum elementum. Phasellus elit nunc, ornare nec ultrices sit amet, imperdiet at eros. Praesent sem nisl, euismod vel urna ut, mollis gravida est. Etiam ut velit at leo venenatis. ",

};

const WelcomeText = () => {

  return (

    <div className="container text-center my-5">
          <h1>{welcome.title}</h1>
          <p className="text-muted mt-4">{welcome.text}</p>
    </div>
  
  );

}


export default WelcomeText;
