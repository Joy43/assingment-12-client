import axios from "axios";

const axiosSequre = axios.create({
    baseURL: 'http://localhost:5000'
})

const useaxiosSequre = () => {
    return axiosSequre;
};

export default useaxiosSequre;