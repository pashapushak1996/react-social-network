import {AXIOS} from "./axiosConfig";

class UsersService {
    async getUsers(pageNum,pageSize) {
        const {data} = await AXIOS.get(`/users?page=${pageNum}&${pageSize}`)
        return data
    }
}


export const userService = new UsersService();