import React from 'react'
import style from '../planet.module.css'
import Row from 'react-bootstrap/Row'

const PhotoBlock = (props) => {
    return <Row>
        <div className={style.center}>
            <img src={props.planet} alt="Planet"/>
        </div>
    </Row>
};

export default PhotoBlock