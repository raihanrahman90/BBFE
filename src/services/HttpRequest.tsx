import axios from "axios";

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
    dataToSend:object,
    accessToken:string
)=>{
    try{
        const response = await HttpRequest.request({
            url, method, data: dataToSend,
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });
        return response
    } catch (error:any) {
        console.error('Terjadi kesalahan:', error.message);
    }
};

const adminRequest = async(url:string, method:string, body:string)=>{
    var accessToken = Cookies.get("accessToken");
}