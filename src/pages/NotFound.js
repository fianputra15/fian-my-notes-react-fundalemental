import React from 'react'
import { HOME_PAGE } from '../constants/path'
import useLang from '../hooks/useProvideLanguage'
import { Link } from 'react-router-dom'
export default function NotFound() {
    const { wordList } = useLang()
    return (
        <div className='h-screen grid place-content-center'>
            <p className='text-black dark:text-gray-200  text-[35px]'>{wordList?.not_found}</p>
            <Link className='text-black underline dark:text-gray-200 font-bold text-sm w-full text-center' to={HOME_PAGE} >{wordList?.back_home}</Link>
        </div>
    )
}