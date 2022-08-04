import {useNavigate} from 'react-router-dom';


import {urls} from "../../services";
import css from "./poster.module.css";




export default function Movie({movie}){

    const navigate = useNavigate();

    const {title,overview,vote_average,poster_path} = movie;

    const setClassName = (score) =>{
        if(score>=8){
            return css.green;
        }if(score>=6){
            return css.orange;
        }else{
            return css.red;
        }
    }


    return(
        <div className={css.poster}>
            <div onClick={()=> navigate('details',{state:movie})} className={css.picture}>
                <img src={poster_path?
                    urls.images+poster_path : 'https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c='} alt={title}/>
            </div>
            <div className={css.info}>
                <h3>{title}</h3>
                <span className={setClassName(vote_average)}>{vote_average}</span>
            </div>
            <div className={css.details}>
                <p>{overview}</p>
                <button onClick={()=>navigate('details',{state:movie})}>Check more</button>
            </div>
        </div>
    )
}