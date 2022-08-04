import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CarouselComponent} from "../components";
import {moviesActions} from "../redux/slices";
import css from "./main.module.css";

export default function MainPage() {

    const {trending} = useSelector(state=>state.moviesReducer);
    const {results} = trending;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.getTrending())
    },[dispatch])

    return (
        <div className={css.main}>
            {results&& <CarouselComponent trends={results}/>}
        </div>
    )
}