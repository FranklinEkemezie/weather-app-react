import 'weather-icons/css/weather-icons.min.css';

import Header from './components/Header';
import Main from './components/Main';

import './App.css';
import {AppContextProvider} from "./contexts/AppContext.jsx";
import Body from "./components/Body.jsx";


function App() {


    return (
        <div>
            <AppContextProvider>
                <Body>
                    <Header />
                    <Main />
                </Body>
            </AppContextProvider>
        </div>
    );
}

export default App;