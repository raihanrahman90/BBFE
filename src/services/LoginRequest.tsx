import { getAPI, postAPI } from "./HttpRequest"

const loginAPI = async(email:string, password:string)=>{
    return postAPI("auth/login", {email:email, password:password});
}

const refreshTokenAPI = async()=>{
    return getAPI("auth/refresh");
}

export {loginAPI, refreshTokenAPI};