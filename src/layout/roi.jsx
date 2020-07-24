import React from 'react'

export default function shortRoi({children}) {
    

    return (
        <section className='roi_section layout_margins padding-l'>
            <div className='roi_left'>
                {children}
            </div>
        </section>
    )
}