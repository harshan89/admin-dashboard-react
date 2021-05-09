import React from 'react';
import BASIC from './themes/basic';
import LIGHT from './themes/light';
import DARK from './themes/dark';

export const themes = {
    basic: {
        ...BASIC
    },

    light: {
        ...LIGHT
    },

    dark: {
        ...DARK
    },
};

export const ThemeContext = React.createContext(
    themes.dark // default value
);