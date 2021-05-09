import React, {useContext} from 'react';
import {ThemeContext} from "./theme-context";

const Header = () => {
    const theme = useContext(ThemeContext);
    return <div><h1>This the header</h1></div>
}

export default Header;