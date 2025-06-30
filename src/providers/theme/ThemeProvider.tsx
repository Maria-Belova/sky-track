import { useEffect, useState, type PropsWithChildren } from 'react';
import { ThemeContext, type ThemeType } from './theme.context';
import { LOCAL_STORAGE_THEME_ITEM, THEMES } from '../../constants/theme';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_ITEM);
    return (savedTheme as ThemeType) || THEMES.DARK;
  });

  useEffect(() => {
    document.documentElement.classList.toggle(THEMES.DARK, theme === THEMES.DARK);
    localStorage.setItem(LOCAL_STORAGE_THEME_ITEM, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
