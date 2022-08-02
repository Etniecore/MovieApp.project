import {urls,axiosService} from './index'


const apiService  = {
 getAll: (page) => axiosService.get(urls.movies, {params:{page}}),
 search:(obj) => axiosService.get(`${urls.search+obj}`),
 getGenres: () => axiosService.get(urls.genres),
 moviesByGenre:(id,page) => axiosService.get(`${urls.byGenre+id}`, {params:{page}})
}

export {apiService};