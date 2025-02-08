
import headerStyles from '../assets/styles/header.module.css';
import Dropdown from "./Dropdown.jsx";
import React, {useContext} from "react";
import AppContext from "../contexts/AppContext.jsx";
import locationPinIcon from "../assets/images/location-svgrepo.svg";
import caretDownIcon from "../assets/images/caret-down-md-svgrepo-com.svg";
import useString from "../hooks/useString.js";

function Header() {

    const { city, popularCities } = useContext(AppContext);
    const { sentenceCase } = useString();

    const dropdownBtnRef = React.createRef();

    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.brand}>
                <span>⛅</span>
                <h1>Weather App</h1>
            </div>
            <div>
                <button
                    className={headerStyles.popularCitiesDropdownBtn}
                    ref={dropdownBtnRef}
                >
                    <img className={headerStyles.locationPinIcon} src={locationPinIcon} alt=""/>
                    {sentenceCase(city)}
                    {/*<img className={headerStyles.caretDownIcon} src={caretDownIcon} alt=""/>*/}
                </button>
                <Dropdown dropdownList={popularCities} toggleBtnRefs={[dropdownBtnRef]}/>
            </div>
        </div>
    );
}

export default Header;