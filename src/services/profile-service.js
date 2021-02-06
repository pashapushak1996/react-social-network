import {instance} from "./axiosConfig";

class ProfileService {
    async getProfile(userId) {
        return await instance.get(`profile/${userId}`);
    }
}

export const profileService = new ProfileService();