import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchItem = memo(function SearchItem(props) {
    const { name, id, star, time, img, director, performer, type, desc } = props

    const data = {
        name,
        star,
        time,
        img,
        director,
        performer,
        type,
        desc
    }

    return (
        <li>
            <Link to={'/detail/' + id +'#' + encodeURI(JSON.stringify(data))}>{name}</Link>
        </li>
    )
})

SearchItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default SearchItem