import React from 'react'
import Main from '../components/Home/Main'
import useInput from '../hooks/useInput'
import useNotes from '../hooks/useNotes'

function Home() {
    const [fillFilter, handleChangeFilter] = useInput('')
    const { notes, isLoading } = useNotes('all')
    return (
        <>
            <Main
                isLoading={isLoading}
                handleChangeFilter={handleChangeFilter}
                items={notes}
                fillFilter={fillFilter}
            />
        </>
    )
}


export default Home