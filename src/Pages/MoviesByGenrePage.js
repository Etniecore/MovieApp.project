import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Movie} from "../components";
import css from "./genreblock.module.css";
import {useEffect} from "react";
import {moviesActions} from "../redux/slices";



export default function MoviesByGenrePage() {

    const genreId = localStorage.getItem('id');
    console.log(genreId);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});


    const {page} = useSelector(state=>state.moviesReducer);
    console.log(page);

    useEffect(()=>{
        dispatch(moviesActions.getByGenre({id: genreId,page:query.get('page')}))
    },[dispatch,genreId,query]);

    const {moviesByGenre} = useSelector(state => state.moviesReducer);
    const {results} = moviesByGenre;

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`});
    };
    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`});
    }

    return (
        <div>
        <div className={css.wrap}>
            {results && results.map((movie,index)=><Movie
                key={index}
                movie={movie}
                />)}
           </div>

            <div className={css.pagination}>
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>


        </div>
    )
}