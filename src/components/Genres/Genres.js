import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions} from "../../redux/slices";
import {Genre} from "../index";
import css from './all.genres.module.css';


export default function Genres(){



    const {genreList} = useSelector(state=>state.genresReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getGenres());
    },[dispatch]);

    const {genres} = genreList;

    return(
        <div className={css.genres}>
            {genres && genres.map((genre,index)=> <Genre
            key = {index}
            genre = {genre}
            />)}
        </div>
    )
}