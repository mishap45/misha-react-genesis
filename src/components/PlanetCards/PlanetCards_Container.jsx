import React, {useEffect, useState} from 'react'
import PlanetCards from './PlanetCards'
import axios from 'axios'

const PlanetCards_Container = () => {

    const [planets, setPlanets] = useState([]);
    const [count, setCount] = useState(0);
    let [currentPage, setCurrentPage] = useState(1);

    useEffect(async () => {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`);
        const data = await res.data.results;
        const coutPage = await res.data.count;
        setPlanets(data);
        setCount(coutPage)
    }, [planets]);

    return <PlanetCards currentPage={currentPage} setCurrentPage={setCurrentPage} count={count} planets={planets} />
};

export default PlanetCards_Container