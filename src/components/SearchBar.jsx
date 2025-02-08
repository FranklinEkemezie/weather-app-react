import {useContext, useEffect, useState} from "react";
import searchBarStyles from "../assets/styles/search-bar.module.css";
import AppContext from "../contexts/AppContext.jsx";
import fetchWeatherData from "../functions/fetchWeatherData.js";
import parseWeatherData from "../functions/parseWeatherData.js";

function SearchBar() {

    const {
        city, setCity,
        setIsLoaded,
        setWeather,
        setError,
        addPopularCities
    } = useContext(AppContext);

    const [cityInput, setCityInput] = useState(city);

    // update the city on the search bar when a popular city is selected
    useEffect(() => {
        setCityInput(city);
    }, [city]);

    const openWeatherApi = {
        key: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        url: import.meta.env.VITE_OPEN_WEATHER_API_BASE_URL
    };

    const handleSearch = (event) => {
        event.preventDefault();

        setIsLoaded(false);
        setError(false);

        fetchWeatherData(cityInput, openWeatherApi.key, openWeatherApi.url)
            .then(data => {

                setWeather(parseWeatherData(data));
                setCity(cityInput);
                addPopularCities(cityInput);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoaded(true);
            })
        ;

    }

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