import { postAPI } from "../../../service/DefaultRequest"

export const createProduct = async(data)=>{
    return await postAPI("product", data);
} 