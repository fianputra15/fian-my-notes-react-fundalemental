import React from 'react'

export default function useInput() {
    const [value, setValue] = React.useState('')
    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
    }
    const handleResetValue = () => {
        setValue('')
    }

    return [
        value, handleChange, handleResetValue
    ]
}