import {useForm} from "react-hook-form";

import css from "./search.module.css";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slices";


export default function Search() {

    const {handleSubmit, register, reset} = useForm()

    const dispatch = useDispatch();


    const submit = (obj) => {
        dispatch(moviesActions.search({obj: obj.search}));
        reset();
    };

    return (
        <div>
            <div className={css.header}>
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