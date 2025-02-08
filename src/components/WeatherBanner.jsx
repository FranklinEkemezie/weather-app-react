import weatherBannerStyles from "../assets/styles/weather-banner.module.css";
import useString from "../hooks/useString.js";
import useFormatDate from "../hooks/useFormatDate.js";

// eslint-disable-next-line react/prop-types
function WeatherBanner( { description, iconId, temperature, timestamp }) {

    const { weekday, month, date, year } = useFormatDate(Date.now());
    const { sentenceCase } = useString();

    return (
        <div className={weatherBannerStyles.container}>
            <div className={weatherBannerStyles.description}>{sentenceCase(description)}</div>
            <div className={weatherBannerStyles.weatherIconContainer}>
                <img
                    className={weatherBannerStyles.weatherIcon}
                    src={`https://openweathermap.org/img/wn/${iconId}@4x.png`}
                    alt={description}
                />
            </div>
            <div className={weatherBannerStyles.temperature}>{`${temperature}℃`}</div>
            <div>{weekday} | {date} {month} {year}</div>
        </div>
    );
}

export default WeatherBanner;