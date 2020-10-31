import React, { useEffect, useState } from 'react'
import Residents from './Residents'
import axios from 'axios'

const Residents_Container = ({ residents }) => {

    const [resident, setResident] = useState([]);
    let ff = [];

    useEffect( async () => {
        const res = await axios.all(residents.map(r => axios.get(r)))
            .then(axios.spread(function (...res) {
                for (let i = 0; i <= res.length-1; i++) {
                    let gg = res[i].data.name;
                    ff.push(gg);
                }
            }));
        setResident(ff);
    }, [residents, resident, ff]);

    return (
        <>
            {resident.map( f => <Residents residentName={f} /> )}
        </>
        )
};

export default Residents_Container