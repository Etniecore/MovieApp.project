import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


import {urls} from "../../services";
import css from "./movie.details.module.css";
import {castActions} from "../../redux/slices";
import {Actors} from "../index";

export default function MovieDetails({movie}) {

    const {id,title, overview, backdrop_path,vote_average, release_date} = movie;

    console.log(id);
    const dispatch = useDispatch();

    const {actors} = useSelector(state=>state.castReducer);
    const {cast} = actors;
    console.log(cast);

    useEffect(()=>{
        dispatch(castActions.getCast({id:id}))
    },[dispatch,id])

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
            <div className={css.cast}>
                {cast&&<Actors cast={cast}/>}
            </div>

        </div>
    )
}