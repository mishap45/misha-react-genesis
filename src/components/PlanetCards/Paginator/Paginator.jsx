import React from 'react'
import style from '../planetCards.module.css'

const Paginator = ({ pages, currentPage, setCurrentPage }) => {

    return (
        <div className={style.paginator}>
            {
                pages.map(p => <span onClick={() => {setCurrentPage(p)}} className={currentPage === p && style.active}>{p}</span>)
            }
        </div>
    )
};

export default Paginator