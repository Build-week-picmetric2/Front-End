import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://picmetric-v2.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}