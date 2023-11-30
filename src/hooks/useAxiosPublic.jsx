import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://m12a12-building-management-server.vercel.app',
    // baseURL: 'http://localhost:5000'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;