import {useLocation} from "react-router-dom";

import {MovieDetails} from "../components";


export default function MovieDetailsPage(){

    const {state} = useLocation();

    return(
        <div>
            <MovieDetails movie={state}/>
        </div>
    )
}