import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import THEMES from './constants/theme';
import {getTheme} from './getTheme';
import {ThemeContext, themes} from "./theme-context";
import Header from './Header';

function App() {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={theme}>
            <div style={theme}>
                <Header />
            </div>

            <button onClick={() => setTheme(themes.dark)}>DARK THEME</button>
            <button onClick={() => setTheme(themes.light)}>LIGHT THEME</button>
        </ThemeContext.Provider>
    );
}

export default App;
