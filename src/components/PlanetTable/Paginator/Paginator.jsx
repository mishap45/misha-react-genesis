import React from 'react'
import style from '../planetTable.module.css'
import { NavLink } from 'react-router-dom'

const Paginator = (props) => {
    return (
        <div className={style.paginator}>
            {
                props.pages.map(p => <NavLink key={p} to={`/page/${p}`} activeClassName={style.active}
                                              className={style.page}>{p}</NavLink>)
            }
        </div>
    )
};

export default Paginator