import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Movie from "../Movie/Movie";
import {moviesActions} from "../../redux/slices";

export default function Movies(){
    const{movies} = useSelector(state=>state.movies);
    const dispatch =useDispatch();
    const {results} = movies;

    useEffect(()=>{
        dispatch(moviesActions.getAll())
    },[])
    return(
        <div>
            {results.map((movie,index)=>
            <Movie
                key ={index}
                movie={movie}
            />)}

        </div>
    )
}