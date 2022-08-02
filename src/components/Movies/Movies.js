import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux/slices";
import {Movie} from "../index";
import css from './container.module.css';


export default function Movies() {
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const {movies,page} = useSelector(state => state.moviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [dispatch,query]);

    const {results} = movies;
    console.log(page);

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
            <div className={css.container}>
                {results && results.map((movie, index) =>
                    <Movie
                        key={index}
                        movie={movie}/>
                )}
            </div>
            <div className={css.pagination}>
            <button onClick={prevPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}