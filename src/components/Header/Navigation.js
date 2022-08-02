import {useNavigate} from "react-router-dom";

import css from './header.module.css';



export default function Navigation(){
    const navigate = useNavigate();
    return(
        <div className={css.header}>
            <button className={css.btn1}> Movies </button>
            <button className={css.btn2} onClick={()=>navigate('genres')}> Genres </button>
        </div>
    )
}