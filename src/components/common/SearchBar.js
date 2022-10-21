import { useSearchParams } from 'react-router-dom'
import useLang from '../../hooks/useProvideLanguage'

export default function SearchBar() {
    const { wordList } = useLang()
    const [searchParams, setSearchParams] = useSearchParams()
    const handleChangeFilter = (e) => {
        const { value } = e.target
        setSearchParams({ title: value })
    }
    return (
        <div className='text-sm lg:w-[1000px] md:w-[800px] sm:w-full mx-auto drop-shadow'>
            <input onChange={handleChangeFilter} value={searchParams.get('title') ? searchParams.get('title') : ''} className='dark:text-white  text-black w-full p-2 bg-white dark:bg-[#323232]  border-white border-[1px] rounded'
                placeholder={wordList?.search_by_title}
            />
        </div>
    )
}
