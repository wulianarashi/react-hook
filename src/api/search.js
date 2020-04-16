import myAxios from './axios'

export const getSearchData = () => myAxios('/data/json/search.json')