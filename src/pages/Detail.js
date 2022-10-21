import React, { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { archiveNotes, deleteNotes, getSingleNotes, unarchiveNotes } from '../services/note'
import { ARCHIEVE_PAGE, NOTES_PAGE } from '../constants/path'
import Spinner from '../components/common/Spinner'
import Content from '../components/Detail/Content'
import Wrapper from '../components/common/Wrapper'


function Detail() {
    const { id } = useParams()
    const [stateDetail, setStateDetail] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()

    const handleRedirect = useCallback(() => {
        navigate('/404')
    }, [navigate])

    React.useEffect(() => {
        const handleGetDetailNotes = async () => {
            try {
                setIsLoading(true)
                const res = await getSingleNotes(id)
                setStateDetail(res?.data)
            } catch (error) {
                handleRedirect()
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        handleGetDetailNotes()
    }, [id, handleRedirect])

    const handleArchiveNotes = async () => {
        try {
            setIsLoading(true)
            await archiveNotes(id)
            navigate(ARCHIEVE_PAGE)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleUnarchiveNotes = async () => {
        try {
            setIsLoading(true)
            await unarchiveNotes(id)
            navigate(NOTES_PAGE)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleDeleteNotes = async () => {
        try {
            setIsLoading(true)
            await deleteNotes(id)
            navigate(NOTES_PAGE)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <div className='flex p-3'>
                <Wrapper>
                    {
                        isLoading && (
                            <div className='flex'>
                                <div className='mx-auto'>
                                    <Spinner />
                                </div>
                            </div>
                        )
                    }
                    <Content
                        handleArchiveNotes={handleArchiveNotes}
                        handleUnarchiveNotes={handleUnarchiveNotes}
                        handleDeleteNotes={handleDeleteNotes}
                        {...stateDetail}
                        isLoading={isLoading}
                    />
                </Wrapper>

            </div>
        </div >
    )
}

export default Detail