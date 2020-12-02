import React from 'react'
import style from '../planet.module.css'
import Row from 'react-bootstrap/Row'

const TextBlock = (props) => {
    return <Row>
        <div className={style.center}>
            <p className={style.text}>
                {props.text}
            </p>
        </div>
    </Row>
};

export default TextBlock