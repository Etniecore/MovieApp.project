import {Navigation, Logo, Search} from "../index";

import css from "./header.module.css";
import {UserInfo} from "../index";


export default function Header() {
    return (
        <div className={css.header}>
            <Logo/>

            <Navigation/>

            <Search/>

            <UserInfo/>
        </div>

    )
}