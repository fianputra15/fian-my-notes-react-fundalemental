import React from 'react'
import { login, getUserLogged } from '../services/auth'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null)
    const [token, setToken] = React.useState(null)
    const [initialLoading, setInitialLoading] = React.useState(true)
    React.useEffect(() => {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'id')
        }
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light')
        }
        const handleGetLoggedUser = async () => {
            try {
                const result = await getUserLogged()
                setUser(result.data)
            } catch (e) {
                setUser(null)
                setToken(null)
                localStorage.removeItem('t')
            } finally {
                setInitialLoading(false)
            }
        }
        handleGetLoggedUser()
    }, [token])


    const signin = ({ payload, onSuccess, onError }) => {
        return login(payload)
            .then((result) => {
                if (result?.status === 'success') {
                    localStorage.setItem('t', result.data.accessToken)
                    localStorage.setItem('lang', 'id')
                    setToken(result.data.accessToken)

                    onSuccess && onSuccess(result)
                } else {
                    throw new Error(result.message)
                }
            })
            .catch((error) => {
                onError && onError(error)
            })
    }

    const signout = () => {
        setUser(null)
        setToken(null)
        localStorage.removeItem('t')
    }

    const memoedValue = React.useMemo(
        () => ({
            user,
            token,
            signout,
            signin,
        }), [user, token]
    )
    return (
        <AuthContext.Provider value={memoedValue}>
            {!initialLoading && children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    return React.useContext(AuthContext)
}
