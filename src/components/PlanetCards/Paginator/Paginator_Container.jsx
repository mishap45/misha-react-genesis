import React, {useState} from 'react'
import Paginator from './Paginator'

const Paginator_Container = ({ count, currentPage, setCurrentPage }) => {

    let pageCount = Math.ceil(count / 10);
    let pages = [];
    for(let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <Paginator pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
};

export default Paginator_Container