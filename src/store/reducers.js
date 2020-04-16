import * as constants from './constants'

export default {
    homeData(state = [], action) {
        const { type, payload } = action
        switch (type) {
            case constants.HOME_DATA:
                return payload
            default:
        }
        return state
    },
    searchData(state = [], action) {
        const { type, payload } = action
        switch (type) {
            case constants.SEARCH_DATA:
                return payload
            default:
        }
        return state
    },
    flag(state = false, action) {
        const { type, payload } = action
        switch (type) {
            case constants.CHANGE_FLAG:
                return payload
            default:
        }
        return state
    },
}