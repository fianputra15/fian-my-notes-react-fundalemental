import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useProvideAuth'
import useLang from '../../hooks/useProvideLanguage'
import useTheme from '../../hooks/useTheme'

export default function Navbar() {
    const { signout, user } = useAuth()
    const { wordList, stateLang, handleChangeLanguage } = useLang()
    const { theme, handleChangeTheme } = useTheme()
    return (
        <nav className='flex items-center justify-between px-8 py-4 lg:flex-row md:flex-row sm:flex-row'>
            <Link className='hover:underline' to='/notes'><h1 className='text-primary font-semibold text-2xl hover:underline'>MyNotes</h1></Link>
            <div className='flex gap-10 items-center'>
                <div className='flex text-primary gap-5 font-bold items-center'>
                    {
                        user ? (
                            <div className='flex text-primary gap-5 font-bold items-center'>
                                <Link className='hover:underline my-auto' to='/notes'>{wordList?.notes}</Link>
                                <Link className='hover:underline my-auto' to='/archive'>{wordList?.archive}</Link>
                                <Link className='hover:underline my-auto' to='/notes/add'>{wordList?.add}</Link>

                            </div>
                        ) : (
                            <div className='flex text-primary gap-5 items-center font-bold'>
                                <Link className='hover:underline' to='/login'>{wordList?.login}</Link>
                                <Link className='hover:underline' to='/register'>{wordList?.register}</Link>
                            </div>
                        )
                    }
                    <button className='hover:brightness-75 flex items-center text-blue-600 rounded font-bold' type='button' onClick={handleChangeLanguage}><span className='material-icons w-auto'>gtranslate</span> {stateLang?.toUpperCase()}</button>
                    <button className='hover:brightness-75 flex items-center text-blue-600 rounded font-bold' type='button' onClick={handleChangeTheme}><span className='material-icons w-auto'>{theme === 'light' ? 'light_mode' : 'dark_mode'}</span></button>
                    {
                        user && (
                            <button onClick={() => signout()} className='hover:brightness-75 flex bg-red-500 text-white p-2 rounded' type='button' ><span className='material-icons'>logout</span> {user?.name}</button>
                        )
                    }

                </div>



            </div>


        </nav >
    )
}
