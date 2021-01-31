import axios from "axios";

export const AXIOS = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': `34d11c8b-f8d3-4701-b00b-af8f93333a60`
    }
});
