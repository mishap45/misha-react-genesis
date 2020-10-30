import React from 'react'
import style from './planetCards.module.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import planet from '../../assets/icons/icons8-earth-planet-100.png'

import 'bootstrap/dist/css/bootstrap.css'

const CardPlanet = ({ climate, name, population }) => {
    return (
        <Card className={style.card} bg={'dark'} text={'light'}>
            <Card.Img style={{ width: 100, margin: '0 auto', paddingTop: '5%' }} variant="top" src={planet} />
            <Card.Body>
                <Card.Title  className={style.title}>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" text={'light'}>
                <ListGroupItem variant={'dark'}>Climate: {climate}</ListGroupItem>
                <ListGroupItem variant={'dark'}>Population: {population === 'unknown' ? '0' : population} residents</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Details</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default CardPlanet