import {instance} from "./axiosConfig";

class UsersService {
    async getUsers(pageNum, pageSize) {
        const {data} = await instance.get(`users?page=${pageNum}&count=${pageSize}`);
        return data
    }

    async followUser(userId) {
        const {data} = await instance.post(`follow/${userId}`);
        return data;
    }

    async unfollowUser(userId) {
        const {data} = await instance.delete(`follow/${userId}`);
        return data
    }
}


export const userService = new UsersService();