import React from 'react'
import Proptypes from 'prop-types'
import { showFormattedDate } from '../../utils'
import { isEmpty } from 'lodash'
import parse from 'html-react-parser'
function Content(props) {
    const { isLoading, title, archived, body, createdAt, handleDeleteNotes, handleArchiveNotes, handleUnarchiveNotes } = props
    return (
        <>
            <div className='flex justify-between'>
                <h2 className='mb-2 text-black text-lg font-bold my-auto dark:text-gray-200'>{title}</h2>
                <div>
                    {
                        !isLoading && (
                            <>
                                {
                                    !archived ? (
                                        <button type='button' onClick={handleArchiveNotes} className=' text-primary'><span className='hover:brightness-75 text-[30px] material-icons'>archive</span></button>
                                    ) : (
                                        <button type='button' onClick={handleUnarchiveNotes} className=' text-primary'><span className='hover:brightness-75 text-[30px] material-icons'>unarchive</span></button>
                                    )
                                }

                                <button type='button' onClick={handleDeleteNotes} className=' text-red-500'><span className='hover:brightness-75 text-[30px] material-icons'>delete</span></button>
                            </>
                        )
                    }

                </div>
            </div>
            <span className='text-[12px] text-black font-normal dark:text-gray-200'>{showFormattedDate(createdAt)}</span>
            <p className='text-black text-body dark:text-gray-200' >
                {!isEmpty(body) ? parse(body) : '-'}
            </p></>
    )
}

Content.propTypes = {
    isLoading: Proptypes.bool,
    title: Proptypes.string,
    body: Proptypes.string,
    createdAt: Proptypes.string,
    archived: Proptypes.bool,
    handleDeleteNotes: Proptypes.func.isRequired,
    handleArchiveNotes: Proptypes.func.isRequired,
    handleUnarchiveNotes: Proptypes.func.isRequired,
}

export default Content