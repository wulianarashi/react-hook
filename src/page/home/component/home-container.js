import React, { memo } from 'react'
import MovieItem from './movie-item'
import PropTypes from 'prop-types'

const HomeContainer = memo(function HomeContainer(props) {
    const { homeData } = props

    return (
        <div className='home-container'>
            <ul>
                {
                    homeData ? homeData.map( item => {
                        return <MovieItem key={item.id} {...item} />
                    }): null
                }
            </ul>
        </div>
    )
})

HomeContainer.propTypes = {
    homeData: PropTypes.array.isRequired
}

export default HomeContainer