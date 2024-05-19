import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const defaultRequest = axios.create({
   baseURL: BASE_URL,
   headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  },
});

const refreshToken = async()=>{
    return defaultRequest.get('auth/refresh')
    .then((response)=>{
        localStorage.setItem(response.data.access_token);
    });
}

const requestWithToken=(method, url, body)=>{
    return defaultRequest.request({url, method, data:body})
    .then((response)=>{
        return response.data;
    })
    .catch((err)=>{
        console.log(err)
        if(err.response.status === 401){
            refreshToken()
            .then(()=>defaultRequest.request({url, method, data:body}));
        } else{
            return err.response.data;
        }
    });
}

export const getAPI=async(url)=>{
    return requestWithToken("get", url, {});
}