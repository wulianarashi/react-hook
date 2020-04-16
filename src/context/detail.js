import React, { createContext, useReducer } from 'react'
import { DETAIL_INFO } from '@/store/constants'

export const DetailContext = createContext({})


const reducer = function(state, action) {
    const { type, payload } = action
    switch (type) {
        case DETAIL_INFO:
            return {
                name:payload.name,
                star:payload.star,
                time:payload.time,
                img:payload.img,
                director:payload.director,
                performer:payload.performer,
                type:payload.type,
                desc:payload.desc
            }
            // return payload
        default:
            return state
    }  
    
}

export const DetailInfoContext = (props) => {
    const [detail, dispatch] = useReducer( reducer, {name:'',
        star:'',
        time:'',
        img:'',
        director:'',
        performer:'',
        type:'',
        desc:''})
    
    return (
        <DetailContext.Provider value={{detail, dispatch}}>
            {props.children}
        </DetailContext.Provider>
    )
}