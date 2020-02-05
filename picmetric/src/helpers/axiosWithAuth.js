import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://picmetric-demo.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}