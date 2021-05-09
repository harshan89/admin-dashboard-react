import THEMES from './constants/theme';
import { BASIC, LIGHT, DARK } from './themes';

export const getTheme = themeName => {
    switch (themeName) {
        case THEMES.LIGHT: return LIGHT;
        case THEMES.DARK: return DARK;
        default: return BASIC;
    }
}
