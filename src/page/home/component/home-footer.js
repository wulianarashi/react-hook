import React from 'react'
import wulianarashi from '@/assets/imgs/wulianarashi.png'

function HomeFooter() {
    return (
        <div className='home-footer'>
            <div className='wulianarashi'>
                <img src={ wulianarashi } alt='' />
                <p>完 成 于 2020年4月</p>
            </div>
        </div>
    )
}

export default HomeFooter