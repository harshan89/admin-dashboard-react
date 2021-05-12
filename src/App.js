import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main/main'
import {ThemeProvider} from 'styled-components';
import THEMES from './constants/theme';
import {getTheme} from './getTheme';
import {ThemeContext, themes} from "./theme-context";
import Header from './Header';

function App() {
    const [theme, setTheme] = useState(themes.light);
    const [sidebarOpen, setsidebarOpen] = useState(false);
    const openSidebar = () => {
        setsidebarOpen(true);
    };
    const closeSidebar = () => {
        setsidebarOpen(false);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <div className="container" style={theme}>
                <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
                <Main />
                <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>

            {/*<button onClick={() => setTheme(themes.dark)}>DARK THEME</button>*/}
            {/*<button onClick={() => setTheme(themes.light)}>LIGHT THEME</button>*/}
        </ThemeContext.Provider>
    );
}

export default App;