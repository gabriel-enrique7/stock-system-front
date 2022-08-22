import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json'
    }
});

export default http;