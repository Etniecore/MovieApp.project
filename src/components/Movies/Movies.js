import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux/slices";
import {Movie} from "../index";
import css from './container.module.css';


export default function Movies() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll())
    }, [dispatch])

    const {movies} = useSelector(state => state.moviesReducer);

    const {results} = movies;


    return (
        <div>
            <div className={css.container} >
        {results && results.map((movie,index)=>
            <Movie
                key={index}
                movie={movie}/>
        )}
            </div>
        </div>
    )
}