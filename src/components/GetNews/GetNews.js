import React from "react";

//import axios from "axios";


/*GET /news. 

axios.get('/news', {

    params: {

      name: '',

      image: '',

      createdAt: ''

    }

  })

  .then(function (response) {

  })

*/


//mockup array

let news = [

  {

    id: 1,

    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image:

      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",

    createdAt: "03/04/2021",

  },

  {

    id: 2,

    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image:

      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",

    createdAt: "03/04/2021",

  },

  {

    id: 3,

    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image:

      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",

    createdAt: "03/04/2021",

  },

  {

    id: 4,

    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image:

      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",

    createdAt: "03/04/2021",

  },

  {

    id: 5,

    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image:

      "https://bitbucket.org/alkemy-dev/t27-client/raw/0e3ef885e245070cba961e22b3553acc08c99dec/public/images/campaign-recent-02.jpg",

    createdAt: "03/04/2021",

  },

];


//filtered array

let filteredNews = news.filter((lastNews) => lastNews.id < 5);


function GetNews() {

  return (

    <div>

      <div>NOVEDADES</div>

      <br />

      <div key={filteredNews.id}>

        <div>

          {filteredNews.map((filteredNews) => (

            <div key={filteredNews.id}>

              <div>{filteredNews.name}</div>

              <br />

              <div>

                <img src={filteredNews.image} alt="newsImage"></img>

              </div>

              <br />

              <div>{filteredNews.createdAt}</div>

              <br />

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}


export default GetNews;
