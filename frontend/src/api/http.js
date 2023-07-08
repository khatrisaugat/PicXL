import axios from 'axios'


export default class Http {
    constructor() {
        this.axios = axios.create({
            withCredentials: true,
            baseURL: `http://localhost:3001`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}