import React, { useEffect, useState } from 'react'
import PlanetTable from './PlanetTable'
import axios from 'axios'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const PlanetTable_Container = (props ) => {

    let idPage = props.match.params.idPage;
    const [planets, setPlanets] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        (async function getPlanet() {
            const res = await axios.get(`https://swapi.dev/api/planets/?page=${idPage}`);
            const data = await res.data.results;
            const coutPage = await res.data.count;
            setPlanets(data);
            setCount(coutPage)
        })()
    }, [planets, idPage]);

    return <PlanetTable count={count} planets={planets} />
};

export default compose(
    withRouter
)(PlanetTable_Container)