import React, { useContext, useEffect } from 'react'
import { DetailContext } from '../../../context/detail'

function DetailInfo() {
    const { detail, dispatch } = useContext(DetailContext)

    useEffect( () => {
        const index = window.location.href.indexOf("#")
        dispatch({type:'DETAIL_INFO',payload: JSON.parse(decodeURI(window.location.href.substr(index + 1)))})
    },[dispatch])

    return (
        <div className='detail-box'>
            <div className='detail-img'>
                <img src={ detail?.img } alt=''></img>
            </div>
            <h2>{ detail?.name }</h2>
            <div className='detail-info'>
                <ul>
                    <li><label>类型 : </label> { [...detail?.type].join(',') }</li>
                    <li><label>时间 : </label> { [...detail?.time].join('-') }</li>
                    <li><label>评分 : </label> { detail?.star }</li>
                    <li><label>导演 : </label> { detail?.director }</li>
                     <li><label>主演 : </label>  { detail?.performer[1] }</li>
                </ul>
                <p>{ detail?.desc }</p>
            </div>
        </div>
    )
}

export default DetailInfo