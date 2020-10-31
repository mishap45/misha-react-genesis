import React from 'react'
import Paginator from './Paginator'
import {compose} from 'redux'
import {Redirect, withRouter} from 'react-router-dom'

const Paginator_Container = ( props ) => {

    let idPage = props.match.params.idPage;
    let pageCount = Math.ceil(props.count / 10);
    let pages = [];
    for(let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    if (idPage > pageCount) {
        return <Redirect to={'/page/1'} />
    }

    return <Paginator pages={pages} />
};

export default compose(
    withRouter
)(Paginator_Container)