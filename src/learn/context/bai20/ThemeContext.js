import { useState,  createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}) {
  const [theme, setTheme] = useState('dark');

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const value = {
    theme,
    toogleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;