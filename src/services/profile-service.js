import {instance} from "./axiosConfig";

class ProfileService {
    async getProfile(userId) {
        return await instance.get(`profile/${userId}`);
    }

    async getProfileStatus(userId) {
        return await instance.get(`profile/status/${userId}`)
    }

    async updateProfileStatus(status) {
        return await instance.put(`profile/status`, {status: status})
    }

}

export const profileService = new ProfileService();