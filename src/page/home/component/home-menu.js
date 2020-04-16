import React, { memo, useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomeMenu = memo(function HomeMenu(props) {
    const { changeFlag, flag } = props
   
    useEffect(() => {
        return function () {
            changeFlag(false)
        }
    },[changeFlag])

    return (
        <>
            <div className={ flag ? 'home-menu on': 'home-menu' }>
                <ul>
                    <li>
                        <Link to='/search'>搜索</Link>
                        <Link to='' onClick={ () => { window.open("https://github.com/wulianarashi/miniprogram-music") } } >小程序</Link>
                        <Link to='' onClick={ () => { window.open("https://github.com/wulianarashi/vue-crud") } }>vue</Link>
                        <Link to='' onClick={ () => { window.open("https://github.com/wulianarashi/react-me") } }>react</Link>
                    </li>
                </ul>
            </div>
            <div className={ flag ? 'home-nav on': 'home-nav' } onClick={ () => { changeFlag(!flag) }}>
                <div className='line'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={ flag ? 'home-bg on': 'home-bg' }></div>
        </>
    )
})

export default HomeMenu