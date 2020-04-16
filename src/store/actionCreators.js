import * as constants from './constants'
import { getHomeData } from '../api/home'
import { getSearchData } from '@/api/search'

export const gHomeData = () => {
	return dispatch => {
		getHomeData().then( res => {
            if(res.state === 200) {
                dispatch({
                    type:constants.HOME_DATA,
                    payload: res.data.movieInfo
                })
            }
        })
	}
}

export const gSearchData = () => {
	return dispatch => {
		getSearchData().then( res => {
            dispatch({
                type:constants.SEARCH_DATA,
                payload: res
            })
        })
	}
}


export const changeFlag = (flag) => ({
    type:constants.CHANGE_FLAG,
    payload: flag     
})
	