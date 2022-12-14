import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from '../h5-rrd-v6/Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link ? s.active : ""} >pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} >junior_plus</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
