import {instance} from "./axiosConfig";

class ProfileService {
    async getProfile(userId) {
        return await instance.get(`profile/${userId}`);
    }

    async getProfileStatus(userId) {
        return await instance.get(`profile/status/${userId}`)
    }

    async updateStatus(status) {
       const {data} = await instance.put(`/profile/status`, {status: status})
        return data
    }
}

export const profileService = new ProfileService();