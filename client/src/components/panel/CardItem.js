import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import CarouselImages from '../carousel/CarouselImages'

function CardItem(props) {
    var item = props.item;

    var image = '';

    if (item.image) {
        image = <button onClick={props.handleClick.bind(this, item.location.lat, item.location.lng)}><Card.Img src={item.image}  /></button>
    } else if (Array.isArray(item.images) && item.images.length > 0) {
        image = <button onClick={props.handleClick.bind(this, item.location.lat, item.location.lng)}><CarouselImages slide={false} interval={null} images={item.images} /></button>
    }

    return (
        <Card className={props.className} >
            <Row>
                <Col>
                    {image}
                </Col>
            </Row>
        </Card>
    );
}

export default CardItem