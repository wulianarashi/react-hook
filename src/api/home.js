import myAxios from './axios'

export const getHomeData = () => myAxios('/data/json/home.json')