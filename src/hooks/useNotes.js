import React, { useState } from 'react'
import { getAllNotes, getAllNotesArchive } from '../services/note'

export default function useNotes(type) {
    const [isLoading, setIsLoading] = useState(false)
    const [notes, setNotes] = React.useState([])

    React.useEffect(() => {
        const handleGetNotes = async () => {
            try {
                setIsLoading(true)
                const res = await getAllNotes()
                setNotes(res?.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }

        }
        const handleGetArchiveNotes = async () => {
            try {
                setIsLoading(true)
                const res = await getAllNotesArchive()
                setNotes(res?.data)
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }

        }
        if (type === 'all') {
            handleGetNotes()
        } else {
            handleGetArchiveNotes()
        }
    }, [type])
    return {
        notes,
        isLoading
    }
}