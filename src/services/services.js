import {axiosService} from "./axios.service";
import {urls} from "./constants";

const apiService  = {
 getAll: () => axiosService.get(urls.movies),
 getImage: (path)=>axiosService.get(`${urls.images}${path}`)
}

export {apiService};