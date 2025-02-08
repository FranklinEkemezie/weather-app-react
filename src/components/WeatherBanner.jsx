import weatherBannerStyles from "../assets/styles/weather-banner.module.css";
import useString from "../hooks/useString.js";
import useFormatDate from "../hooks/useFormatDate.js";

// eslint-disable-next-line react/prop-types
function WeatherBanner( { description, iconId, temperature, timestamp, loading, error }) {

    const { sentenceCase } = useString();
    const { weekday, month, date, year } = useFormatDate(Date.now());

    if (loading) {
        return <WeatherBannerSkeleton />;
    }

    if (error) {
        return (
            <div className={`${weatherBannerStyles.container} ${weatherBannerStyles.error}`}>
                <span>⚠</span>
                Something went wrong!
            </div>
        )
    }

    return (
        <div className={`${weatherBannerStyles.container} ${loading ? 'loading' : ''}`}>
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

const WeatherBannerSkeleton = () => {
    return (
        <div className={`${weatherBannerStyles.container} ${weatherBannerStyles.loading}`}>
            <div className={weatherBannerStyles.description}></div>
            <div className={weatherBannerStyles.weatherIconContainer}>
                <span className={weatherBannerStyles.weatherIcon}></span>
            </div>
            <div className={weatherBannerStyles.temperature}></div>
            <div className={weatherBannerStyles.dateTime}></div>
        </div>
    );
}

export default WeatherBanner;