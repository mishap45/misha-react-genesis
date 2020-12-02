import React from 'react'
import style from './planetTable.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Paginator_Container from './Paginator/Paginator_Container'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import arrow from '../../assets/icons/arrow.svg'

const PlanetTable = ({ planets, count }) => {

    let planetInfoTable = planets.map( p => {
        const newUrl = p.url.split('/');

        return <tr key={p.name} className={style.mainData}>

            <td>{p.name}</td>
            <td>{p.climate}</td>
            <td>{p.rotation_period}</td>
            <td>{p.diameter}</td>
            <td>{p.gravity}</td>
            <td>{p.terrain}</td>
            <td>{p.population === 'unknown' ? '0' : p.population}</td>
            <td className={style.link}>
                <Link to={`/planet/${newUrl[5]}`}>
                    Details <img src={arrow} alt="arrow"/>
                </Link>
            </td>

        </tr>});

    return (
        <div className={style.planetContainer}>
            <Container>
                <Row>
                    {/*{cardsPlanets}*/}
                    <table width={'100%'}>

                        <tr className={style.Thead}>
                            <th>Name</th>
                            <th>Climate</th>
                            <th>Rotation period</th>
                            <th>Diameter</th>
                            <th>Gravity</th>
                            <th>Terrain</th>
                            <th>Population</th>
                            <th> </th>
                        </tr>

                        {planetInfoTable}
                    </table>
                </Row>

                <Row><Paginator_Container count={count} /></Row>

            </Container>
        </div>
    )
};

export default PlanetTable