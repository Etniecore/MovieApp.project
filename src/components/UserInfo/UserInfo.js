import css from "./user.module.css";


export default function UserInfo(){
    return(
        <div className={css.user}>
            <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt={'user'}/>
            <p>Bohdan</p>
        </div>
    )
}