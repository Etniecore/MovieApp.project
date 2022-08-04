import {urls,axiosService} from './index'


const apiService  = {
 getAll: (page) => axiosService.get(urls.movies, {params:{page}}),

 moviesByGenre:(id,page) => axiosService.get(`${urls.byGenre+id}`, {params:{page}}),

 getTrending: ()=>axiosService.get(urls.trending),

 getGenres: () => axiosService.get(urls.genres),

 search:(obj) => axiosService.get(`${urls.search+obj}`),
}

export {apiService};