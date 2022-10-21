import React from 'react'
import useInput from '../hooks/useInput'
import { Link } from 'react-router-dom'
import { register } from '../services/auth'
import { LOGIN_PAGE } from '../constants/path'
import useLang from '../hooks/useProvideLanguage'
import Wrapper from '../components/common/Wrapper'

export default function Login() {
    const [email, handleChangeEmail, handleResetEmailValue] = useInput('')
    const [password, handleChangePassword, handleResetEmailPassword] = useInput('')
    const [name, handleChangeName, handleResetNameValue] = useInput('')
    const [confirmPassword, handleChangeConfirmPassword, handleResetConfirmPassword] = useInput('')
    const { wordList } = useLang()
    const [isLoading, setIsLoading] = React.useState(false)
    const [isSuccessRegistered, setIsSuccessRegistered] = React.useState(false)
    const [isErrorRegister, setIsErrorRegister] = React.useState('')

    const handleResetAllField = () => {
        handleResetEmailValue()
        handleResetEmailPassword()
        handleResetNameValue()
        handleResetConfirmPassword()
    }
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const payload = {
                name,
                email,
                password
            }
            await register(payload)
            setIsSuccessRegistered(true)
            handleResetAllField() // reset form after successfully registered
        } catch (err) {
            setIsErrorRegister(err.response?.data?.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <main className='p-4'>
            <div className='flex p-3'>
                <Wrapper>
                    {
                        isSuccessRegistered && (
                            <div className='bg-green-400 px-5 py-2 rounded text-white text-sm my-2 flex justify-between'>
                                Berhasil melakukan pendaftaran
                                <button type='button' onClick={() => setIsSuccessRegistered(false)}>x</button>
                            </div>
                        )
                    }
                    {
                        isErrorRegister && (
                            <div className='bg-red-400 px-5 py-2 rounded text-white text-sm my-2 flex justify-between'>
                                {isErrorRegister}
                                <button type='button' onClick={() => setIsErrorRegister(null)}>x</button>
                            </div>
                        )
                    }
                    <h2 className='text-3xl font-extrabold mb-5 text-black dark:text-white'>{wordList?.register}</h2>
                    <form onSubmit={handleSubmitForm} className='space-y-4'>
                        <div className='text-black '>
                            <label className='text-sm text-black dark:text-white '>{wordList?.name}*</label>
                            <input onChange={handleChangeName} value={name} type='text' required className='p-4 dark:border-1 bg-white dark:bg-[#323232]  dark:border-[1px] w-full drop-shadow rounded dark:text-white' />
                        </div>
                        <div className='text-black '>
                            <label className='text-sm text-black dark:text-white'>Email*</label>
                            <input onChange={handleChangeEmail} value={email} type='email' required className='p-4 bg-white dark:bg-[#323232] w-full drop-shadow dark:border-[1px] rounded dark:text-white' />
                        </div>
                        <div className='text-black dark:text-white'>
                            <label className='text-sm text-black dark:text-white'>{wordList?.password}*</label>
                            <input minLength={6} onChange={handleChangePassword} value={password} type='password' required className='p-4 bg-white dark:bg-[#323232] dark:border-[1px] w-full drop-shadow rounded dark:text-white' />
                        </div>
                        <div className='text-black '>
                            <label className='text-sm text-black dark:text-white'>{wordList?.confirm_password}*</label>
                            <input minLength={6} onChange={handleChangeConfirmPassword} value={confirmPassword} type='password' required className='p-4 w-full dark:bg-[#323232] drop-shadow rounded dark:border-[1px] dark:text-white' />
                            {
                                confirmPassword !== password && (
                                    <p className='text-red-500 text-sm font-medium'>{wordList?.unmatch_password}</p>
                                )
                            }
                        </div>
                        <div className='flex mt-8'>
                            <div className='ml-auto'>
                                <Link to={LOGIN_PAGE} className='px-4 py-2 underline text-gray-500 text-sm dark:text-white'>{wordList?.back_login}</Link>
                                <button type='submit' disabled={isLoading || (confirmPassword !== password)} className={`${(isLoading || (confirmPassword !== password)) && 'opacity-70'} px-4 py-2 bg-primary text-white rounded drop-shadow ml-auto`}>{isLoading ? '...' : wordList?.submit}</button>
                            </div>
                        </div>
                    </form>
                </Wrapper>

            </div>
        </main>
    )
}