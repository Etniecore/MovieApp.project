const apiKey = '7de09af58353f38fac5c4849e79abe9f';
const baseURL = 'https://api.themoviedb.org/3'

const urls = {
    movies: `/discover/movie?api_key=${apiKey}&page=1`,
    genres: `/genre/movie/list?api_key=${apiKey}`,
    byGenre: `/discover/movie?api_key=${apiKey}&with_genres=`,//id of genre
    images: `https://image.tmdb.org/t/p/original`,//+path
    search: `/search/movie?api_key=${apiKey}&language=en-US&query=`//+name of the film
}

export {apiKey,urls,baseURL};
