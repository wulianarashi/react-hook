import axios from 'axios'

export default function myAxios(url, data = {}, method = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise
        
        if (method === 'GET') {
            promise = axios.get(url, { params: data }) 
        } else {
            promise = axios.post(url, data)
        }

        promise.then(response => {
            resolve(response.data)
        }).catch(error => { 
            alert('请求错误: ' + error.message)
        })
    })
}