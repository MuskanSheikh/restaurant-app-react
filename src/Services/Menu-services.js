import { myAxios } from "./helper";

export const getMenu = async (menuId) =>{
    const response = await myAxios.get(`user-api/get-all/menu`);
    return response.data;
}