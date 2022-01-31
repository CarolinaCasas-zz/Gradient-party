import { createContext, useContext, useState } from "react";
import sun from "../img/sun.png"
import moon from "../img/moon.png"


const themes = {
    light: {
        background: "#d9d9d9",
        textColor: "#000000",
        linkImg:moon,
    },
    dark: {
        background: "#282c36",
        textColor: "#dc658b",
        linkImg:sun,
    }
}

const ThemeContext = createContext();

function ThemeProvider(props) {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => theme === "light" ? setTheme("dark") : setTheme("light");
    const value = { theme: themes[theme], changeTheme }

    return <ThemeContext.Provider value={value} {...props} />
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme };