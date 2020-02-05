import React from 'react'
import { ListGroup } from 'react-bootstrap'

function ListPanel(props) {
    return (
        <ListGroup id={props.id} className={props.className} >
            {props.children}
        </ListGroup>
    )
}

export default ListPanel