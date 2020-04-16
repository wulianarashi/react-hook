import React, { memo } from 'react'
import PropTypes from 'prop-types'

const MovieItem = memo(function MovieItem(props) {
    const { name, desc, url, sub } = props
    return (
        <li>
            <div className='img-box'>
                <img src={url} alt='' />
            </div>
            <div className='sub'>
                <p>{sub}</p>
            </div>
            <div className='movie-desc'>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </li>
    )
})

MovieItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    sub: PropTypes.string.isRequired,
}

export default MovieItem