import React from 'react'
import style from '../planetCards.module.css'
import {compose} from 'redux'
import {withRouter, NavLink} from 'react-router-dom'

const Paginator = (props) => {

    let idPage = props.match.params.idPage;

    return (
        <div className={style.paginator}>
            {
                props.pages.map(p => <NavLink key={p} to={`/page/${p}`} activeClassName={style.active}
                                              className={style.page}>{p}</NavLink>)
            }
        </div>
    )
};

export default compose(
    withRouter
)(Paginator)