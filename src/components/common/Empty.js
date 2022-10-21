import useLang from '../../hooks/useProvideLanguage'

export default function Empty() {
    const { wordList } = useLang()
    return (
        <div className='text-center text-red-400 font-bold text-[20px]'>
            <p>{wordList?.empty_note} :(</p>
        </div>
    )
}