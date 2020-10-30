import React from 'react'
import style from './planetCards.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardPlanet from './CardPlanet'

import 'bootstrap/dist/css/bootstrap.css'

const PlanetCards = () => {
    return (
        <div className={style.cardsContainer}>
            <Container>
                <Row>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                    <CardPlanet/>
                </Row>
            </Container>
        </div>
    )
};

export default PlanetCards