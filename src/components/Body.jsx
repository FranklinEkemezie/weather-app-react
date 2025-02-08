import defaultBgImg from "../assets/images/1688532648369.jpg";
import {useContext, useEffect, useState} from "react";
import AppContext from "../contexts/AppContext.jsx";
import env from "../../env.js";

// eslint-disable-next-line react/prop-types
function Body( { children } ) {

    const { isLoaded, weather } = useContext(AppContext);

    const [bgImgUrl, setBgImg] = useState(defaultBgImg)

    useEffect(() => {

        if (isLoaded) {
            const unsplashImgApiUrl = `https://api.unsplash.com/photos/random?query=weather-${weather.description}&client_id=${env.API.UNSPLASH.ACCESS_KEY}&orientation=landscape&w=1920&h=1080`;

            fetch(unsplashImgApiUrl)
                .then(response => {
                    if (! response.ok) {
                        throw new Error(`${response.status} ${response.statusText}`);
                    }

                    return response.json();
                })
                .then(data => {

                    console.log(data);

                    setBgImg(data.urls.full);
                })
            ;
        }
    }, [isLoaded]);

    return (
        <div
        style={ {
            backgroundImage: `url(${bgImgUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: 'darken',
            minHeight: "100vh",
            color: "white"
        } }
        >
            {children}
        </div>
    );
}

export default Body;