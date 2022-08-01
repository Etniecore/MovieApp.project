import {useNavigate} from "react-router-dom";

import css from './header.module.css';



export default function Navigation(){
    const navigate = useNavigate();
    return(
        <div className={css.header}>
            <button> Movies </button>
            <button onClick={()=>navigate('genres')}> Genres </button>
        </div>
    )
}