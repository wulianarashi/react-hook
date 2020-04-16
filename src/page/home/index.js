import React, {  useEffect, useMemo, } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HomeHeader from './component/home-header'
import HomeMenu from './component/home-menu'
import HomeContainer from './component/home-container'
import HomeFooter from './component/home-footer'
import { gHomeData, changeFlag } from '@/store/actionCreators'
import '@/assets/css/home.scss'

function Home(props) {
    const { dispatch, homeData, flag } = props

    useEffect( () => {
        dispatch(gHomeData())
    }, [dispatch])

    const childFlag = useMemo( () => {
        return bindActionCreators({
            changeFlag
        }, dispatch)
    }, [dispatch])

    return (
        <div className='home'>
            <HomeHeader />
            <HomeMenu {...childFlag} flag={ flag }/>
            <HomeContainer homeData={ homeData } />
            <HomeFooter />  
        </div>
    )
}

export default connect(
    state => state,
    dispatch => ({dispatch})
)(Home)