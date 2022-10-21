import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NotesInput from '../components/Add/NotesInput/NotesInput'
import { HOME_PAGE } from '../constants/path'
import { addNotes } from '../services/note'
import useInput from '../hooks/useInput'

function Add() {
    const navigate = useNavigate()
    const [title, handleChangeTitle] = useInput('')
    const [isLoading, setIsLoading] = useState(false)
    const [body, setBody] = useState('')

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const payload = {
                title,
                body,
            }
            await addNotes(payload)
            navigate(HOME_PAGE)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChangeBody = (e) => {
        const { textContent } = e.target
        setBody(textContent)
    }
    return (
        <NotesInput
            body={body}
            isLoading={isLoading}
            title={title}
            handleSubmitForm={handleSubmitForm}
            handleChangeTitle={handleChangeTitle}
            handleChangeBody={handleChangeBody}
        />
    )
}

export default Add