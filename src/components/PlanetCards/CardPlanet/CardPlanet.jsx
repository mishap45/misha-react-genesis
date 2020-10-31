import React from 'react'
import style from '../planetCards.module.css'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import planet from '../../../assets/icons/planet-100.png'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

const CardPlanet = ({ climate, name, population, url }) => {

    const newUrl = url.split('/');

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
            <Card.Body className={style.details}>
                <Link to={`/planet/${newUrl[5]}`}>Details</Link>
            </Card.Body>
        </Card>
    )
};

export default CardPlanet