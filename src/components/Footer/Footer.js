import React from 'react';

const Footer = () => {
    const [mock] = React.useState({

        img: "https://picsum.photos/200", 
        linkWeb: "https://jonathangomezit.com",
        socialMedia:[
            {
                name: "Instagram",
                url: "https://www.instagram.com/"
            },
            {
                name: "Facebook",
                url: "https://www.facebook.com/",
            },
            {
                name: "Twitter",
                url: "https://www.twitter.com"
            }
        ]
    })
    return(
        <footer>
            <img src={mock.img} alt="logo" />
            <a href={mock.linkWeb}>Test Site</a>
            {
                mock.socialMedia.map(({name, url}) => <a href={url} >{name}</a>)
            }
        </footer>
    )
}

export default Footer;