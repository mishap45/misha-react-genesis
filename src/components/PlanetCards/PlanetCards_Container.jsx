import React, {useEffect, useState} from 'react'
import PlanetCards from './PlanetCards'
import axios from 'axios'

const PlanetCards_Container = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(async () => {
        const res = await axios.get('https://swapi.dev/api/planets/');
        const data = await res.data.results;
        setPlanets(data)
    }, [planets]);

    return <PlanetCards planets={planets} />
};

export default PlanetCards_Container