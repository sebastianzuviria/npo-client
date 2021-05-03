import React from "react";

/*GET a /news. 
Devolverá el listado de entries cuyo campo type sea "news". 
Devolverá solamente los campos name, image y createdAt*/

//welcome title
let welcome = [
  {
    id: 1,
    title: "Bienvenido a nuestra página",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis libero non libero luctus feugiat. Aliquam erat volutpat. Integer et dapibus nibh, at aliquam urna. Fusce faucibus lacus sit amet tellus bibendum elementum. Phasellus elit nunc, ornare nec ultrices sit amet, imperdiet at eros. Praesent sem nisl, euismod vel urna ut, mollis gravida est. Etiam ut velit at leo venenatis. ",
  },
];

let news = [
  {
    id: 1,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bitbucket.org/alkemy-dev/t27-client/src/master/public/images/campaign-recent-02.jpg",
    createdAt: "03/04/2021",
  },
  {
    id: 2,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bitbucket.org/alkemy-dev/t27-client/src/master/public/images/campaign-recent-02.jpg",
    createdAt: "03/04/2021",
  },
  {
    id: 3,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bitbucket.org/alkemy-dev/t27-client/src/master/public/images/campaign-recent-02.jpg",
    createdAt: "03/04/2021",
  },
  {
    id: 4,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bitbucket.org/alkemy-dev/t27-client/src/master/public/images/campaign-recent-02.jpg",
    createdAt: "03/04/2021",
  },
  {
    id: 5,
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bitbucket.org/alkemy-dev/t27-client/src/master/public/images/campaign-recent-02.jpg",
    createdAt: "03/04/2021",
  },
];

function Home() {
  return (
    <div>
      <div>
        {welcome.map((content) => (
          <div className="container" key={content.id}>
            <div>{content.title}</div>
            <br />
            <div>{content.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
