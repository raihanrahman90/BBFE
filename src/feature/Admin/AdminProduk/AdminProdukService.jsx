import { getAPI } from "../../../utils/DefaultRequest"

export const getListPage=async(name, minPrice, maxPrice)=>{
    let url = `product?name=${name}`;
    if(minPrice!=null) url = `${url}&minPrice=${minPrice}`;
    if(maxPrice!=null) url = `${url}&maxPrice=${maxPrice}`;
    return await getAPI(url);
}