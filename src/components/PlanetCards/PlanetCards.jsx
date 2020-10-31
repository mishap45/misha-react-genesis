import React from 'react'
import style from './planetCards.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardPlanet from './CardPlanet/CardPlanet'

import 'bootstrap/dist/css/bootstrap.css'

const PlanetCards = ({ planets }) => {

    let cardsPlanets = planets.map( p => <CardPlanet key={p.name} name={p.name} url={p.url}
                                                     climate={p.climate} population={p.population} /> );

    return (
        <div className={style.cardsContainer}>
            <Container>
                <Row><p className={style.headPlanetCards}>Star Wars Planets Encyclopedia</p></Row>
                <Row>
                    {cardsPlanets}
                </Row>
            </Container>
        </div>
    )
};

export default PlanetCards