import React from 'react'
import Proptypes from 'prop-types'
import useLang from '../../../hooks/useProvideLanguage'

function NotesInput(props) {
    const {
        title,
        isLoading,
        handleSubmitForm,
        handleChangeTitle,
        handleChangeBody
    } = props
    const { wordList } = useLang()
    return (
        <div className='flex'>
            <div className='w-[800px] mx-auto mt-10 rounded bg-white  shadow-lg p-3 dark:bg-[#323232]'>
                <h2 className='mb-2 text-primary text-lg font-bold'>Buat Catatan</h2>
                <form className='text-black text-sm' onSubmit={handleSubmitForm}>
                    <div className='mb-4'>
                        <label className='mb-2 text-[12px] dark:text-white '>{wordList?.title} *</label>
                        <input placeholder={wordList?.title_placeholder} maxLength={50} required value={title ? title : ''} onChange={handleChangeTitle} className={`dark:bg-[#323232]  dark:text-white w-full border-secondary border-[1px] p-2 rounded ${parseInt(title.length || 0, 10) >= 50 && 'focus:outline-red-500 border-red-500'}`} />
                        <div className='flex justify-between'>
                            {
                                parseInt(title.length || 0, 10) > 50 && (
                                    <span className='text-red-500 text-[10px]'>Melebihi jumlah karakter</span>
                                )
                            }
                            <span className='text-[10px] text-primary ml-auto dark:text-white '>{wordList?.rest_character}: {50 - parseInt(title.length || 0, 10)}</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='dark:text-white  mb-2 text-[12px]'>{wordList?.body} *</label>
                        <div data-placeholder={wordList?.body_placeholder} contentEditable onInput={handleChangeBody} className='w-full border-secondary border-[1px] dark:text-white dark:bg-[#323232]  p-2 rounded min-h-[200px]'>
                        </div>
                    </div>
                    <div>
                        <button disabled={parseInt(title.length || 0, 10) > 50 || isLoading} type='submit' className={`w-full py-2 text-white rounded bg-gradient-to-t from-primary to-[#9FC5FC] ${(parseInt(title.length || 0, 10) > 50 || isLoading) && 'opacity-50'}`}>{isLoading ? '...' : wordList?.submit}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

NotesInput.propTypes = {
    title: Proptypes.string.isRequired,
    isLoading: Proptypes.bool,
    handleSubmitForm: Proptypes.func.isRequired,
    handleChangeTitle: Proptypes.func.isRequired,
    handleChangeBody: Proptypes.func.isRequired,
}

export default NotesInput
