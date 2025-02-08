
const fetchWeatherData = (city, apiKey, baseUrl) => {
    const weatherApiUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    return fetch(weatherApiUrl)
        .then(response => {
            if (! response.ok) {
                throw Error(`Status: ${response.status} ${response.statusText}`);
            }

            return response.json();
        })
    ;
}

export default fetchWeatherData;