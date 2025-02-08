

const AppReducer = (state, action) => {

    const {type, payload = {}} = action;

    switch (type) {

        case 'SET_CITY':
            return {...state, city: payload.city}

        case 'SET_IS_LOADED':
            return {...state, isLoaded: payload.isLoaded}

        case 'SET_WEATHER':
            return {...state, weather: payload.weather}

        case 'SET_ERROR':
            return {...state, error: payload.error}
    }
}

export default AppReducer;