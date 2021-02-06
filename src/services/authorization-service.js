import {instance} from "./axiosConfig";

class AuthorizationService {
    async authMe() {
        const {data} = await instance.get(`auth/me`);
        return data;
    }
}


export const authService = new AuthorizationService();