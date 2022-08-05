import {urls} from "../../services";

export default function Actors({cast}){
    return(
        <div>
            <div>
                <h1>Main actors</h1>
                <img src={urls.images+cast[0].profile_path} alt={cast[0].name}/>
                <p> {cast[0].name}</p>
            </div>
            <div>
                <img src={urls.images+cast[1].profile_path} alt={cast[1].name}/>
                <p> {cast[1].name}</p>
            </div>
            <div>
                <img src={urls.images+cast[2].profile_path} alt={cast[2].name}/>
                <p> {cast[2].name}</p>
            </div>
            <div>
                <img src={urls.images+cast[3].profile_path} alt={cast[3].name}/>
                <p> {cast[3].name}</p>
            </div>
        </div>
    )
}