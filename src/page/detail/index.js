import React from 'react'
import Back from '@/component/back'
import { DetailInfoContext } from '@/context/detail'
import DetailInfo from './component/detail-info'
import '@/assets/css/detail.scss'

function Detail() {
   
    return (
        <div className='detail'>
            <Back url='/search' />
            <DetailInfoContext>
                <DetailInfo />
            </DetailInfoContext>
        </div>
    )
}

export default Detail