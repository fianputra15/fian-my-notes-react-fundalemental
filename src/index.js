import React from 'react'
import { createRoot } from 'react-dom/client'
import 'material-icons/iconfont/material-icons.css'
import './styles/style.css'
import Container from './container/Container'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './hooks/useProvideAuth'
import { ProvideLanguage } from './hooks/useProvideLanguage'
import { ProvideTheme } from './hooks/useTheme'

const root = createRoot(document.getElementById('root'))
root.render(

    <AuthProvider>
        <ProvideLanguage>
            <ProvideTheme>
                <BrowserRouter>
                    <div className=' dark:bg-[#121212] h-screen'>
                        <Container />
                    </div>
                </BrowserRouter>
            </ProvideTheme>
        </ProvideLanguage>
    </AuthProvider>

)
