import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: 'https://m12a12-building-management-server.vercel.app'
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;