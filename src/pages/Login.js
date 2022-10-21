import React, { useState } from 'react'
import { REGISTER_PAGE } from '../constants/path'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useProvideAuth'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import useLang from '../hooks/useProvideLanguage'
import Wrapper from '../components/common/Wrapper'

export default function Login() {
    const [email, handleChangeEmail] = useInput('')
    const [password, handleChangePassword] = useInput('')
    const [isLoading, setIsLoading] = useState(false)
    const [isErrorLogin, setIsErrorLogin] = useState(null)
    const location = useLocation()
    const { from } = location.state || { from: { pathname: '/notes' } }
    const { signin, user } = useAuth()
    const { wordList } = useLang()
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const payload = {
            email,
            password
        }
        signin({
            payload,
            onSuccess: () => {
                setIsLoading(false)
            },
            onError: (err) => {
                setIsLoading(false)
                setIsErrorLogin(err?.response?.data?.message)
            },
        })
    }
    return (
        <main className='p-4'>
            {
                user ? (
                    <Navigate to={from} />
                ) : (
                    <div className='flex p-3'>
                        <Wrapper>
                            {
                                isErrorLogin && (
                                    <div className='bg-red-400 px-5 py-2 rounded text-white text-sm my-2 flex justify-between'>
                                        {isErrorLogin}
                                        <button type='button' onClick={() => setIsErrorLogin(null)}>x</button>
                                    </div>
                                )
                            }
                            <h2 className='text-3xl font-extrabold mb-5 text-black dark:text-white'>{wordList?.login}</h2>
                            <form onSubmit={handleSubmitForm} className='space-y-4'>
                                <div className='text-black  dark:text-white'>
                                    <label>Email</label>
                                    <input required onChange={handleChangeEmail} type='email' className='p-4 bg-white dark:bg-[#323232] w-full drop-shadow rounded  dark:border-[1px]' />
                                </div>
                                <div className='text-black dark:text-white'>
                                    <label>Password</label>
                                    <input required onChange={handleChangePassword} type='password' className='p-4 bg-white dark:bg-[#323232] w-full drop-shadow rounded  dark:border-[1px]' />
                                </div>
                                <div className='flex mb-4'>
                                    <div className='ml-auto'>
                                        <Link to={REGISTER_PAGE} className='px-4 py-2 underline text-gray-500 text-sm dark:text-white'>{wordList?.have_account}</Link>
                                        <button type='submit' disabled={isLoading} className={`${isLoading && 'opacity-70'} px-4 py-2 bg-primary text-white rounded drop-shadow ml-auto`}>{isLoading ? '...' : wordList?.submit}</button>
                                    </div>
                                </div>
                            </form>
                        </Wrapper>

                    </div>
                )
            }

        </main>
    )
}