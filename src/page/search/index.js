import React, { useEffect, useState, useRef, lazy, Suspense } from 'react'
import { connect } from 'react-redux'
import Back from '@/component/back'
import BScroll from 'better-scroll'
import { gSearchData } from '@/store/actionCreators'
import { DetailInfoContext } from '@/context/detail'
import '@/assets/css/search.scss'
import loading from '@/assets/imgs/search/loading.gif'

const SearchItem = lazy(() => import('./component/search-item'))

function Search(props) {
    const { dispatch, searchData } = props

    const [val, setVal] = useState('')
    const [arr, setArr] = useState([])
    const [flag, setFlag] = useState(false)

    const timer = useRef()

    useEffect(() => {
        const wrapper = document.getElementById('searchContent')
        new BScroll(wrapper, {
            click: true
        })
    }, [])

    useEffect(() => {
        dispatch(gSearchData())
    }, [dispatch])

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        if (val === '') {
            setFlag(false)
            setArr([])
        }else {
            setFlag(true)
        }

        timer.current = setTimeout(() => {
            const result = []

            searchData.forEach(item => {
                if (item.name.includes(val)) {
                    result.push(item)
                }
            })

            setArr(result)
        }, 100);
    }, [val, searchData])

    return (
        <div className='search'>
            <Back url='/home'><input type='text' className='search-input' placeholder='请输入你想搜索的电影，限豆瓣top250' value={val} onChange={(e) => { setVal(e.target.value) }} /></Back>
            <DetailInfoContext>
                <div className='search-content' id='searchContent'>
                    <div>
                        <Suspense fallback={<img className='loading' src={loading} alt='' ></img>}>
                            <ul>
                                {
                                    flag ? arr.map(item => {
                                        return (
                                            <SearchItem key={item.id} {...item} />
                                        )
                                    }) : null
                                }
                            </ul>
                        </Suspense>
                    </div>
                </div>
            </DetailInfoContext>
        </div>
    )

}

export default connect(state => state, dispatch => ({
    dispatch
}))(Search)