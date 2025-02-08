import WeatherBanner from "./WeatherBanner.jsx";
import SearchBar from "./SearchBar.jsx";
import {useContext} from "react";
import AppContext from "../contexts/AppContext.jsx";

function Main() {

    const { isLoaded, weather, error } = useContext(AppContext);

    return (
        <div>
            <SearchBar />
            <WeatherBanner {...weather} loading={! isLoaded} error={error} />
        </div>
    );
}

export default Main;