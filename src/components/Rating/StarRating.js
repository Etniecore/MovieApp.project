import {Rating} from "react-simple-star-rating";
import {useState} from "react";


export default function StarRating(){
    const [rating,setRating] = useState(0);

    const handleRating = (rate) =>{
        setRating(rate);
    }



    return(
        <div>
            <Rating  onClick={handleRating} ratingValue={rating}/>
        </div>
    )
}