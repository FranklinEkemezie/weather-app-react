import dropdownStyles from "../assets/styles/dropdown.module.css";
import {useEffect, useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
function Dropdown( { dropdownList, toggleBtnRefs } ) {

    const [showDropdown, setShowDropdown] = useState(false);

    const showDropdownRef = useRef(showDropdown);
    showDropdownRef.current = showDropdown;

    useEffect(() => {

        const toggleDropdown = () => setShowDropdown(! showDropdownRef.current);

        // eslint-disable-next-line react/prop-types
        toggleBtnRefs.forEach(btn => {
            btn.current.addEventListener('click', toggleDropdown);
        });

        return () => {
            // eslint-disable-next-line react/prop-types
            toggleBtnRefs.forEach(btn => {
                btn.current.removeEventListener('click', toggleDropdown);
            });
        }
    }, []);

    return (
        <div>
            <div className={dropdownStyles.container}>
                {
                    showDropdown && (
                        <div className={dropdownStyles.dropdown}>
                            <ul className={dropdownStyles.dropdownList}>
                                {
                                    dropdownList.map((item, index) => (
                                        <li key={index} className={dropdownStyles.dropdownItem}>
                                            <a href="" className={dropdownStyles.dropdownLink}>{item}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Dropdown;