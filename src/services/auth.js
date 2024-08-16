import { apiClient, clearDetails, } from "./config"


export const apiSignUp = async(payload)=>{
    return apiClient.post("/auth/signUp",payload);

}
export const apiGetSignUp = async()=>{
    return apiClient.get("/auth/signUp");

}

export const apiLogIn = async(payload)=>{
    return apiClient.post("/auth/token/logIn",payload);
}
export const apiLogout = async () => {
    clearDetails()
  };
  export const apiCheckUsernameExists = async(userName)=>{
    return apiClient.get(`/auth/${userName}`);
}
export const apiCheckEmailExists = async(email)=>{
    return apiClient.get(`/auth/${email}`);
}
