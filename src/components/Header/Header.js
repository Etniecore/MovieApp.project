import {Navigation, Logo, Search} from "../index";

import css from "./header.module.css";


export default function Header() {
    return (
        <div className={css.header}>
            <Logo/>
            <Navigation/>
            <Search/>
        </div>
    )
}