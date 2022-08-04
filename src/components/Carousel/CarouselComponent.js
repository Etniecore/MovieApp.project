import {Carousel} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {urls} from "../../services";


export default function CarouselComponent({trends}){

    const navigate = useNavigate();

    return(
        <div>
            <Carousel>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[0]})}
                        src={urls.images+trends[0].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{trends[0].title}</h3>
                        <p>{trends[0].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[1]})}
                        src={urls.images+trends[1].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{trends[1].title}</h3>
                        <p>{trends[1].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[2]})}
                        src={urls.images+trends[2].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[2].title}</h1>
                        <p>{trends[2].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[3]})}
                        src={urls.images+trends[3].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[3].title}</h1>
                        <p>{trends[3].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[4]})}
                        src={urls.images+trends[4].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[4].title}</h1>
                        <p>{trends[4].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[5]})}
                        src={urls.images+trends[5].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[5].title}</h1>
                        <p>{trends[5].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[6]})}
                        src={urls.images+trends[6].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[6].title}</h1>
                        <p>{trends[6].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[7]})}
                        src={urls.images+trends[7].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[7].title}</h1>
                        <p>{trends[7].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[8]})}
                        src={urls.images+trends[8].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[8].title}</h1>
                        <p>{trends[8].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={5000}>
                    <h1> Trending this week</h1>
                    <img onClick={()=> navigate('details',{state:trends[9]})}
                        src={urls.images+trends[9].backdrop_path}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>{trends[9].title}</h1>
                        <p>{trends[9].overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}