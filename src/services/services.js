import {urls,axiosService} from './index'


const apiService  = {
 getAll: () => axiosService.get(urls.movies),
 search:(obj) => axiosService.get(`${urls.search+obj}`)
}

export {apiService};