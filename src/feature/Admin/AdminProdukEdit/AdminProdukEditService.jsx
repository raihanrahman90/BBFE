import { getAPI } from "../../../service/DefaultRequest"

export const getDetailProduct=async(id)=>{
    var url = `product/${id}`;
    return await getAPI(url);
}

export const updateProduct= async(id, updateData)=>{
    var url = `product/${id}`;
    return await putAPI(url);
}