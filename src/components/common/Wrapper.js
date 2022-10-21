import React from 'react'
import Proptypes from 'prop-types'
function Wrapper(props) {
    const { children } = props
    return (
        <div className='w-[1000px]  overflow-auto mx-auto mt-10 rounded bg-white dark:bg-[#323232] shadow-lg p-3'>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: Proptypes.node.isRequired
}

export default Wrapper