import {urls,axiosService} from './index'


const apiService  = {
 getAll: () => axiosService.get(urls.movies),
 search:(obj) => axiosService.get(`${urls.search+obj}`),
 getGenres: () => axiosService.get(urls.genres),
 moviesByGenre:(id) => axiosService.get(`${urls.byGenre+id}`)
}

export {apiService};