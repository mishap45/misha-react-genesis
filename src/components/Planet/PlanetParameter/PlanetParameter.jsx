import React from 'react'
import style from '../planet.module.css'

const PlanetParameter = ({ parameterText, parameterValue }) => {
    return <p className={style.parameter}>{ parameterText }: { parameterValue }</p>
};

export default PlanetParameter