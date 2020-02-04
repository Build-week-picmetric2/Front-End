import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}