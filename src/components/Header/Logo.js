import {useNavigate} from "react-router-dom";

import css from "./header.module.css";

export default function Logo() {

    const navigate = useNavigate();

    return (
        <div className={css.logo}>
            <img src={'https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg'} alt={'TMDB'}/>
            <button onClick={()=> navigate('main')} style={{color:"deepskyblue"}}>Movie App</button>
        </div>
    )
}