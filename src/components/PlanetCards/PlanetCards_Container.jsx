import React, { useEffect, useState } from 'react'
import PlanetCards from './PlanetCards'
import axios from 'axios'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

const PlanetCards_Container = ( props ) => {

    let idPage = props.match.params.idPage;
    const [planets, setPlanets] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(async () => {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${idPage}`);
        const data = await res.data.results;
        const coutPage = await res.data.count;
        setPlanets(data);
        setCount(coutPage)
    }, [planets, idPage]);

    return <PlanetCards count={count} planets={planets} />
};

export default compose(
    withRouter
)(PlanetCards_Container)