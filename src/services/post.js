import { apiClient } from "./config";

export const  apiAddPost = async(payload)=>{
    return apiClient.post("/scroll",payload);

};
export const  apiGetPost = async()=>{
    return apiClient.get("/scroll");

};
// export const apiGetPostById = async (id) => {
//     return apiClient.get(`/scroll/${id}`);
//   };
export const  apiUpdatePost = async(id)=>{
    return apiClient.patch(`/scroll/${id}`);

};
export const  apiDeletePost = async(id)=>{
    return apiClient.delete(`/scroll/${id}`);

};
