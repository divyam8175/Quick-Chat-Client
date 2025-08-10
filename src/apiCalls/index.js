import axios from "axios";

export const url = process.env.REACT_APP_API_URL
console.log(url);
export const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});