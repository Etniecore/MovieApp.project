import {urls} from "../../services";
import css from "./poster.module.css";

export default function Movie({movie}){

    const {title,overview,vote_average,poster_path} = movie;

    return(
        <div className={css.poster}>
            <div className={css.picture}>
                <img src={urls.images+poster_path} alt={''}/>
            </div>
            <div className={css.info}>
                <h3>{title}</h3>
                <span>{vote_average}/10</span>
            </div>
            <div className={css.details}>
                <p>{overview}</p>
            </div>

        </div>
    )
}