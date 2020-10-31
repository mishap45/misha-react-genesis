import React, { useEffect, useState } from 'react'
import Planet from './Planet'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const Planet_Container = ( props ) => {

    let idPlanet = props.match.params.id;
    let [planet, setPlanet] = useState([]);
    let [missing, setMissing] = useState(false);

    useEffect(async () => {
        const res = await axios.get(`https://swapi.dev/api/planets/` + idPlanet + `/`);
        const data = await res.data;
        await data.residents.length === 0 && setMissing(true);
        setPlanet(data)
    }, [idPlanet]);

    return <Planet planet={planet} missing={missing} />
};

export default compose(
    withRouter
)(Planet_Container)