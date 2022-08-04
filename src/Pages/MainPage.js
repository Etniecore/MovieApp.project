import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CarouselComponent, Movies} from "../components";
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
        <div>
            <div className={css.main}>
                {results&& <CarouselComponent trends={results}/>}
            </div>

            <div>
                <h1 style={{textAlign:"center", marginTop:"15px", textShadow:" 5px 5px 5px black"}}>Recently released films</h1>
              <Movies/>
            </div>
        </div>

)}