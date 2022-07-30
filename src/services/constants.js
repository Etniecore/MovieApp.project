const apiKey = '7de09af58353f38fac5c4849e79abe9f';
const baseURL = 'https://api.themoviedb.org/3/discover'

const urls = {
    movies: `/movie?api_key=${apiKey}&page=1`,
    images: `https://image.tmdb.org/t/p/original`,//+path
    search: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`
}

export {apiKey,urls,baseURL};
