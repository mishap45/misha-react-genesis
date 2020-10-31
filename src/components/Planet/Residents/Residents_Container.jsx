import React, { useEffect, useState } from 'react'
import Residents from './Residents'
import axios from 'axios'

const Residents_Container = ({ residents }) => {

    const [resident, setResident] = useState([{ name: '' }]);

    useEffect( async () => {
        const res = await axios.all(residents.map(r => axios.get(r)))
            .then(axios.spread(function (...res) {
                for (let i = 0; i <= res.length-1; i++) {
                    setResident(resident => ({ ...resident, name: res[i].data.name }))
                }
            }))
    }, [residents, resident]);

    return <Residents residentName={resident.name} />
};

export default Residents_Container