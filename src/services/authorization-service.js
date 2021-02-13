import {instance} from "./axiosConfig";

class AuthorizationService {
    async authMe() {
        const {data} = await instance.get(`auth/me`);
        return data;
    }

    async login(email, password, rememberMe = false) {
        const {data} = await instance.post(`auth/login`, {
            email,
            password,
            rememberMe
        });
        return data;
    }

    async logout() {
        const {data} = await instance.delete(`auth/login`);
        return data;
    }
}


export const authService = new AuthorizationService();