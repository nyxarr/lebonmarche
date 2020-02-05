import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselImages(props) {
    return (
        <Carousel slide={props.slide} interval={props.interval}>
            {props.images.map((image) => {
                return <Carousel.Item>
                    <img
                        className="d-block"
                        src={image}
                        alt=""
                    />
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default CarouselImages