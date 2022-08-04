import {urls} from "../../services";
import css from "./movie.details.module.css";

export default function MovieDetails({movie}) {

    const {title, overview, backdrop_path,vote_average, release_date} = movie;

    return (
        <div>
            <div className={css.background}>
                <img src={backdrop_path? urls.images + backdrop_path: 'https://static.vecteezy.com/system/resources/previews/006/014/383/original/it-s-movie-time-print-concept-with-lettering-watching-cinema-with-popcorn-film-reel-movie-cracker-flat-hand-drawn-illustration-vector.jpg'} alt={title}/>
            </div>

            <div className={css.heading}>
                <h1>{title} </h1>
            </div>

            <div className={css.content}>
                <span>
                <img src={'https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg'} alt={''}/>
                    {vote_average}/10 Release date: {release_date}</span>
                <h2>Overview</h2>
                <p>{overview}</p>
                <button>Watch</button>
            </div>
        </div>
    )
}