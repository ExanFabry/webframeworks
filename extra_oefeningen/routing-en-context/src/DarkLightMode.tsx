// import React from "react";
// import { useContext } from "react";

// export const ComponentD = () => {
//   const {theme} = useContext(ThemeContext);
//   return <p style={{color: theme === "dark" ? "white" : "black"}}>{theme}</p>;
// };

// interface IThemeContext {
//     theme: string,
//     styles: {
//         backgroundColor: string,
//         color: string
//     }
// }

// export const ThemeContext = React.createContext<IThemeContext>({
//     theme: 'light',
//     styles: {
//         backgroundColor: "#ffffff",
//         color: "#000000"
//     }
// });

import { createContext, useState, type ReactNode } from "react";

export type Theme = "black" | "white";

interface IThemeContext {
    theme: Theme;
    toggle: () => void
}

export const ThemeContext = createContext<IThemeContext>({theme: "white", toggle: () => {}});

const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("white");

    const toggle = () => {
        setTheme(theme => theme === "black" ? "white" : "black");
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggle: toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;