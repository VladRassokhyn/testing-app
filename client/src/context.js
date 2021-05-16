import React from "react";

const themes = {
    light: {},
    dark: {}
}
const themeProvider = React.createContext({
    theme: themes.light,
    changeTheme: (theme) => {
        if (theme === 'dark'){
            this.theme = themes.dark
        } else {
            this.theme = themes.light
        }
    }
})