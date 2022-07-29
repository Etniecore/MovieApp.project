import {urls} from "../../services";
import css from './movie.module.css';

export default function Movie({movie}){

    const {title,poster_path,vote_average} = movie;

    return(
        <div >
            <h3>Title {title}</h3>
            <img src={`${urls.images+poster_path}`} alt={`${title}`}/>
            <span>{vote_average}</span>


        </div>
    )
}