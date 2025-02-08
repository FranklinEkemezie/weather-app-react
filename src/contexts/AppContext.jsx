import React, {useReducer} from "react";
import AppReducer from "../reducers/AppReducer.js";

const AppContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ( { children }) => {
    // App Initial state
    const popularCities = ['New York', 'Lagos', 'Accra', 'Senegal'];
    const appInitialState = {
        city: popularCities[0],
        weather: {
            temperature: null,
            description: null,
            iconId: null,
        },
        isLoaded: false,
        popularCities: [...popularCities],
    }

    const [state, dispatch] = useReducer(AppReducer, appInitialState);

    const setCity = (city) => {
        dispatch({type: 'SET_CITY', payload: { city }});
    }

    const setIsLoaded = (isLoaded) => {
        dispatch({type: 'SET_IS_LOADED', payload: { isLoaded }});
    }

    const setWeather = ({ temperature, description, timestamp, iconId }) => {
        dispatch({type: 'SET_WEATHER', payload: {weather: {
            temperature, description, timestamp, iconId
        }}});
    }

    const appContextValue = {
        ...state,
        setCity,
        setIsLoaded,
        setWeather
    };


    return (
        <AppContext.Provider value={appContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
