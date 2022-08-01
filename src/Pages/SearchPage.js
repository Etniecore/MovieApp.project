import {useSelector} from "react-redux";

import css from "../components/Movies/container.module.css";
import {Movie} from "../components";

export default function SearchPage(){

    const {search} = useSelector(state=>state.moviesReducer);
    const {results} = search;

    return(
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