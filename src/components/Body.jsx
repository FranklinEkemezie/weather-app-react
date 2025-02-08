import defaultBgImg from "../assets/images/1688532648369.jpg";
import {useContext, useEffect, useState} from "react";
import AppContext from "../contexts/AppContext.jsx";
import fetchWeatherData from "../functions/fetchWeatherData.js";
import parseWeatherData from "../functions/parseWeatherData.js";

// eslint-disable-next-line react/prop-types
function Body( { children } ) {

    const {
        isLoaded, setIsLoaded,
        city, setCity,
        weather, setWeather
    } = useContext(AppContext);

    const [bgImgUrl, setBgImg] = useState(defaultBgImg);

    // Little helper function to organise api URL and api Key
    const buildApiDetails = (key, url) => ({key, url});

    const {
        VITE_OPEN_WEATHER_API_BASE_URL, VITE_OPEN_WEATHER_API_KEY,
        VITE_UNSPLASH_API_BASE_URL, VITE_UNSPLASH_API_SECRET_KEY
    } = import.meta.env;

    const openWeatherApiDetails = buildApiDetails(VITE_OPEN_WEATHER_API_KEY, VITE_OPEN_WEATHER_API_BASE_URL);
    const unsplashImgApiDetails = buildApiDetails(VITE_UNSPLASH_API_SECRET_KEY, VITE_UNSPLASH_API_BASE_URL);

    // Fetch and load weather data on first render
    useEffect(() => {

        const { key, url } = openWeatherApiDetails;

        setIsLoaded(false);

        fetchWeatherData(city, key, url)
            .then(data => {

                const parsedWeatherData = parseWeatherData(data);

                setWeather(parsedWeatherData);
                setCity(city);
                setIsLoaded(true);

                return parsedWeatherData
            })
        ;

    }, []);


    // Load the Background Img from Unsplash once the image loads
    useEffect(() => {

        const { key, url } = unsplashImgApiDetails;
        const { description } = weather;

        const unsplashImgApiUrl = `${url}?query=weather-${description}&client_id=${key}&orientation=landscape&w=1920&h=1080`;

        if (isLoaded) {
            fetch(unsplashImgApiUrl)
                .then(response => {
                    if (! response.ok) {
                        throw new Error(`${response.status} ${response.statusText}`);
                    }

                    return response.json();
                })
                .then(data => {
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