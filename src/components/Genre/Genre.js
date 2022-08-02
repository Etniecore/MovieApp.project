import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {moviesActions} from "../../redux/slices";
import css from './genre.module.css'


export default function Genre({genre}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name, id} = genre;


    return (
        <div className={css.genres}>
            <button className={css.genreTag}
                onClick={() => {
                    navigate('movies')
                    dispatch(moviesActions.getByGenre({id: id}))
                    localStorage.setItem('id', id)
                }}>
                {name}
            </button>
        </div>
    )
}