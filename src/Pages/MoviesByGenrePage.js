import {useSelector} from "react-redux";

import {Movie} from "../components";
import css from "./genreblock.module.css";


export default function MoviesByGenrePage() {

    const {moviesByGenre} = useSelector(state => state.moviesReducer)
    const {results} = moviesByGenre;

    return (
        <div className={css.wrap}>
            {results && results.map((movie,index)=><Movie
                key={index}
                movie={movie}
                />)}
        </div>
    )
}