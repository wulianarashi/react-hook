import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/css/back.scss'

const Back = memo(function Back(props) {
    const { url } = props

    return (
        <div className='back-box'>
            <Link to={ url } className='back'></Link>
            { props.children }
        </div>
    )
})

export default Back