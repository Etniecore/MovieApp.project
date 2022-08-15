import {Carousel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {urls} from "../../services";

export default function CarouselComponent({trends}){


    const navigate = useNavigate();

    return(
        <div>
            <Carousel>
                {
                    trends.map(item=> <Carousel.Item interval={5000}>
                        <h1> Trending this week</h1>
                        <img onClick={()=> navigate('details',{state:item})}
                             src={urls.images+item.backdrop_path}
                             alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.overview}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }
            </Carousel>

        </div>
    )
}