import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useNotes from '../hooks/useNotes'
import SearchBar from '../components/common/SearchBar'
import Group from '../components/common/Group/Group'
export default function Archieve() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { notes, isLoading } = useNotes('')
    return (
        <main className='p-4'>
            <SearchBar />
            <Group
                isLoading={isLoading}
                items={searchParams.get('title') ? notes?.filter((itemFilter) => itemFilter?.title.toLowerCase().includes(searchParams.get('title').toLowerCase())) : notes}
                type='archive'
            />
        </main>
    )
}