import {AXIOS} from "./axiosConfig";

class UsersService {
    async getUsers() {
        const {data} = await AXIOS.get(`/users`)
        return data
    }
}


export const userService = new UsersService();