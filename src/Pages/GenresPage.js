import {Outlet} from "react-router-dom";

import {Genres} from "../components";

export default function GenresPage(){
    return(
        <div>
           <Genres/>
            <Outlet/>
        </div>
    )
}