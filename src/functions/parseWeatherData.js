
const parseWeatherData = (data) => {
    return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        timestamp: data.dt,
        iconId: data.weather[0].icon
    };
}

export default parseWeatherData;