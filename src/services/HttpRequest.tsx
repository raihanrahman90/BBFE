import axios from "axios";
import { refreshTokenAPI } from "./LoginRequest";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const HttpRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type":"application/json"
    }
});

const callApiWithToken = async(
    url:string,
    method:string,
    dataToSend:any,
    accessToken:string|undefined
)=>{
    try{
        alert("ini mulai")
        let response = await HttpRequest.request({
            url, method, data: dataToSend,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        if(response.status ==  401) {
            refreshTokenAPI();
            response = await HttpRequest.request({
                url, method, data: dataToSend,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            });
        }
        return response
    } catch (error:any) {
        console.error('Terjadi kesalahan:', error.message);
    }
};

const getAPI = async(url:string)=>{
    return callApiWithToken(url, "get","", localStorage.getItem("token"));
}

const postAPI = async(url:string, dataToSend:any)=>{
    return callApiWithToken(url, "post", dataToSend, localStorage.getItem("token"));
}

const putAPI = async(url:string, dataToSend:any)=>{
    return callApiWithToken(url, "put", dataToSend, localStorage.getItem("token"));
}

const deleteAPI = async(url:string)=>{
    return callApiWithToken(url, "delete","", localStorage.getItem("token"));
}

export {getAPI, postAPI, putAPI, deleteAPI};