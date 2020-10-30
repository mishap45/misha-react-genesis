import React from 'react'
import Planet from './Planet'
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const Planet_Container = (props) => {

    let idPlanet = props.match.params.id;

    alert(idPlanet);

    return <Planet />
};

export default compose(
    withRouter
)(Planet_Container)