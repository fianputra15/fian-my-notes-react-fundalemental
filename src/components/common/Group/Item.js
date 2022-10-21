import { showFormattedDate } from '../../../utils'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import { isEmpty } from 'lodash'
export default function Item(props) {
    const { id, title, body, createdAt } = props
    return (
        <div className='p-3 bg-white dark:bg-[#323232] shadow-md lg:w-[300px] h-[250px] sm:w-full  hover:brightness-95 break-words'  >
            <Link to={`/notes/${id}`} className='text-lg font-bold underline block dark:text-gray-200'>{title}</Link>
            <span className='text-[10px] font-light dark:text-gray-200'>{showFormattedDate(createdAt)}</span>
            {
                !isEmpty(body) && (
                    <div className='font-normal text-[12px] dark:text-gray-200'>{parse(body)}</div>
                )
            }
        </div>
    )
}

Item.propTypes = {
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    body: Proptypes.string.isRequired,
    createdAt: Proptypes.string.isRequired,
}