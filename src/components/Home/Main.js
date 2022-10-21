import { useSearchParams } from 'react-router-dom'
import Proptypes from 'prop-types'
import Group from '../common/Group/Group'
import NotesSearchBar from '../common/SearchBar'
export default function Main(props) {
    const { items, isLoading } = props
    const itemsActive = items?.filter((val) => val?.archived === false)
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <main className='p-4'>
            <NotesSearchBar />
            <Group
                isLoading={isLoading}
                items={searchParams.get('title') ? itemsActive?.filter((itemFilter) => itemFilter?.title.toLowerCase().includes(searchParams.get('title').toLowerCase())) : itemsActive}
                type='active'
            />
        </main>
    )
}

Main.propTypes = {
    items: Proptypes.array,
    isLoading: Proptypes.bool,
}
