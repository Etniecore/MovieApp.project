import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import css from "./search.module.css";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slices";

import { FaSearch } from "react-icons/fa";



export default function Search() {

    const {handleSubmit, register, reset} = useForm()
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submit = (obj) => {
        dispatch(moviesActions.search({obj: obj.search}));
        reset();
        navigate('search')
    };

    return (
        <div>
            <div className={css.header}>
                <FaSearch style={{color:'grey', fontSize: '35px', marginRight:'10px'}}/>
                <form onSubmit={handleSubmit(submit)}>
                    <input className={css.search}
                           type={"search"}
                           placeholder={'Type here to search'}
                           {...register('search')}
                    />
                </form>

            </div>
        </div>
    )
}