import {useContext, useEffect, useRef, useState} from "react";
import searchBarStyles from "../assets/styles/search-bar.module.css";
import AppContext from "../contexts/AppContext.jsx";
import env from "../../env.js";

function SearchBar() {

    const {
        city, setCity,
        isLoaded, setIsLoaded,
        weather, setWeather
    } = useContext(AppContext);

    const [cityInput, setCityInput] = useState(city);

    const parseWeatherData = (data) => {
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            timestamp: data.dt,
            iconId: data.weather[0].icon
        };
    }

    const apiKey = env.API.OPEN_WEATHER.KEY;


    const handleSearch = (event) => {
        event.preventDefault();

        setIsLoaded(false);

        fetchWeatherData(cityInput, apiKey)
            .then(data => {

                // temperature, description, timestamp, iconId
                setWeather(parseWeatherData(data));
                setCity(cityInput);
                setIsLoaded(true);
            })
        ;

    }

    const fetchWeatherData = async (city, apiKey) => {
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        return fetch(weatherApiUrl)
            .then(response => {
                if (! response.ok) {
                    throw Error(`Status: ${response.status} ${response.statusText}`);
                }

                return response.json();
            })
        ;
    }


    useEffect(() => {

        setIsLoaded(false);

        fetchWeatherData(city, apiKey)
            .then(data => {

                setWeather(parseWeatherData(data));
                setCity(city);
                setIsLoaded(true);

            })
        ;

    }, []);

    return (
        <div className={searchBarStyles.container}>
            <form action="" onSubmit={handleSearch}>
                <div className={searchBarStyles.searchField}>
                    <input
                        type="search"
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                    />
                    <button type="submit">Search 🔎</button>
                </div>
            </form>

        </div>
    );
}

export default SearchBar;