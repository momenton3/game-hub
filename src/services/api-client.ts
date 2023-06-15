import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/games',
    params: {
        key: '83e117a0edf64adb9bbd3dda0d276908'
    }
})