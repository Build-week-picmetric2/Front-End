import axios from 'axios';

export const axiosImageWithAuth = () => {
    return axios.create({
        baseURL: 'https://picmetric-demo.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token'),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}