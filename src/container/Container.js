import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import { privateRouteList } from '../configs/route'
import { LOGIN_PAGE, REGISTER_PAGE } from '../constants/path'
import { getToken } from '../helper/token'
import useAuth from '../hooks/useProvideAuth'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'

export default function Container() {
    const { user } = useAuth()
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    {privateRouteList?.map((route) => {
                        return (
                            <Route key={route?.path} path={route?.path} element={user || getToken() ? route?.element : <Navigate to={LOGIN_PAGE} />} exact={route?.exact} />
                        )
                    })}
                    <Route path={REGISTER_PAGE} element={<Register />} />
                    <Route path={LOGIN_PAGE} element={<Login />} />
                    <Route path='/404' element={<NotFound />} />
                    <Route path='*' element={<Navigate to="/404" />} />
                </Routes>
            </main>
        </>

    )
}