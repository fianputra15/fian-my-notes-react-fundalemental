import Proptypes from 'prop-types'
import NotesEmpty from '../Empty'
import Item from './Item'
import Spinner from '../Spinner'
import useLang from '../../../hooks/useProvideLanguage'

export default function Group(props) {
    const { type, items, isLoading } = props
    const { wordList } = useLang()
    return (
        <div className='flex mt-10 '>
            <div className='w-[1000px] mx-auto space-y-2'>
                <div>
                    <h2 className='text-primary font-bold flex items-center'><span className='material-icons mr-2'>format_list_bulleted</span> {wordList[type]}</h2>
                </div>
                {
                    isLoading && (
                        <div className='flex'>
                            <div className='mx-auto'>
                                <Spinner />
                            </div>

                        </div>
                    )
                }
                {
                    items?.length !== 0 ? (
                        <div className='lg:flex md:flex sm:block lg:space-y-0 md:space-y-0 sm:space-y-10 p-2  flex-wrap gap-2 text-black'>
                            {
                                items?.map((item, key) => (
                                    <Item key={key} {...item} />
                                ))
                            }
                        </div>
                    ) : (
                        <>{!isLoading && (
                            <NotesEmpty />
                        )}</>
                    )
                }
            </div>
        </div>


    )
}

Group.propTypes = {
    type: Proptypes.string.isRequired,
    items: Proptypes.array.isRequired,
    isLoading: Proptypes.bool
}