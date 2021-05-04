import React from "react";


//welcome title

let welcome = [

  {

    id: 1,

    title: "Bienvenido a nuestra página",

    text:

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero non libero luctus feugiat. Aliquam erat volutpat. Integer et dapibus nibh, at aliquam urna. Fusce faucibus lacus sit amet tellus bibendum elementum. Phasellus elit nunc, ornare nec ultrices sit amet, imperdiet at eros. Praesent sem nisl, euismod vel urna ut, mollis gravida est. Etiam ut velit at leo venenatis. ",

  },

];


function WelcomeText() {

  return (

    <div>

      <div>

        {welcome.map((content) => (

          <div className="welcome-container" key={content.id}>

            <div>{content.title}</div>

            <br />

            <div>{content.text}</div>

          </div>

        ))}

      </div>

    </div>

  );

}


export default WelcomeText;