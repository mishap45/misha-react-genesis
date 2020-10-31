import React from 'react'
import style from './planet.module.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import planetIcon from '../../assets/icons/planet-100.png'
import leftArrow from '../../assets/icons/left-arrow-100.png'
import Col from 'react-bootstrap/Col'
import PlanetParameter from './PlanetParameter/PlanetParameter'
import Table from 'react-bootstrap/Table'

import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import Residents_Container from './Residents/Residents_Container'

const Planet = ({ planet, missing }) => {
    return (
        <div className={style.planetPage}>
            <Container>
                <Row>
                    <Link to={'/'}><img src={leftArrow} className={style.backArrow} alt="back arrow"/></Link>
                </Row>

                <Row className={style.planetNameBlock}>
                    <img src={planetIcon} alt="planet icon"/>
                    <p>{planet.name}</p>
                </Row>

                <Row>
                    <div className={style.separator}> </div>
                </Row>

                <Row>
                    <Col>
                        <PlanetParameter parameterText={'Rotation_period'} parameterValue={planet.rotation_period}/>
                        <PlanetParameter parameterText={'Diameter'} parameterValue={planet.diameter}/>
                        <PlanetParameter parameterText={'Climate'} parameterValue={planet.climate}/>
                    </Col>

                    <Col>
                        <PlanetParameter parameterText={'Gravity'} parameterValue={planet.gravity}/>
                        <PlanetParameter parameterText={'Terrain'} parameterValue={planet.terrain}/>
                        <PlanetParameter parameterText={'Population'} parameterValue={
                            planet.population === 'unknown' ? '0' : planet.population
                        }/>
                    </Col>
                </Row>

                <Row>
                    <div className={style.separator}> </div>
                </Row>

                <Row>
                    <p className={style.residents}>Residents</p>
                </Row>

                <Row>
                    {
                        missing
                            ? <div className={style.missing}>Residents are missing</div>
                            : <Table className={style.table} striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                        <Residents_Container residents={planet.residents}/>
                                    </tbody>
                            </Table>
                    }
                </Row>

            </Container>
        </div>
    )
};

export default Planet