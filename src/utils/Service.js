import axios from "axios"
import { $headers, $url } from "./Url";
const invokeApi = async (method, url, headers, params) => {
    try {
        const options = {
            method: method,
            url: url,
            headers: headers,
            params: params ?? ''

        }
        console.log('options', options)
        const response = await axios.request(options);
        console.log('result+', response);
        return response.data;
    } catch (error) {
        console.error('error:+', error);
        throw error;
    }
}


export const $services = {
    imdb100Movies: async (obj) => {
        return invokeApi('GET', $url.rapid_Imdp100, $headers.rapid_Imdp100, obj)
    }
}