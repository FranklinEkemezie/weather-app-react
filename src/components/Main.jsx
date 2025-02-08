import WeatherBanner from "./WeatherBanner.jsx";
import SearchBar from "./SearchBar.jsx";
import {useContext} from "react";
import AppContext from "../contexts/AppContext.jsx";

function Main() {

    const { isLoaded, weather } = useContext(AppContext);

    return (
        <div>
            <SearchBar />
            {
                isLoaded ? <WeatherBanner {...weather} /> : 'Loading...'
            }
        </div>
    );
}

export default Main;