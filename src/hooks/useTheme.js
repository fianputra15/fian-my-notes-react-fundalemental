import React, { useCallback } from "react"
import Proptypes from 'prop-types'
const ThemeContext = React.createContext()

export const ProvideTheme = ({ children }) => {
    const [theme, setTheme] = React.useState(localStorage.getItem('theme'))


    React.useEffect(() => {
        localStorage.setItem('theme', theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else if (theme === 'light') {
            document.documentElement.classList.remove('dark')
        }

    }, [theme])

    const handleChangeTheme = useCallback(() => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [theme])

    const memoedValue = React.useMemo(() => ({
        theme,
        handleChangeTheme
    }), [theme, handleChangeTheme])

    return (
        <ThemeContext.Provider value={memoedValue}>{children}</ThemeContext.Provider>
    )


}

ProvideTheme.propTypes = {
    children: Proptypes.node.isRequired
}


export default function useTheme() {
    return React.useContext(ThemeContext)
}
