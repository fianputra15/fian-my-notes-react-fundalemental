import React, { useEffect } from 'react'
import Proptypes from 'prop-types'
import { language } from '../configs/lang'

const LanguageContext = React.createContext()

export const ProvideLanguage = ({ children }) => {
    const [stateLang, setStateLang] = React.useState(localStorage.getItem('lang'))
    const [wordList, setWordList] = React.useState(language(localStorage.getItem('lang')))


    const handleChangeLanguage = React.useCallback(() => {
        if (stateLang === 'en') {
            setStateLang('id')

        } else if (stateLang === 'id') {
            setStateLang('en')

        }
    }, [stateLang])

    useEffect(() => {
        if (stateLang === 'en') {
            localStorage.setItem('lang', 'en')
        } else if (stateLang === 'id') {
            localStorage.setItem('lang', 'id')
        }
        setWordList(language(stateLang))
    }, [stateLang])




    const memoedValue = React.useMemo(
        () => ({
            wordList,
            stateLang,
            handleChangeLanguage,
        }), [stateLang, wordList, handleChangeLanguage])


    return (
        <LanguageContext.Provider value={memoedValue}>
            {children}
        </LanguageContext.Provider>
    )



}

ProvideLanguage.propTypes = {
    children: Proptypes.node.isRequired
}


export default function useLang() {
    return React.useContext(LanguageContext)
}
