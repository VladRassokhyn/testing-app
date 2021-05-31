import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import s from './YearService.module.scss';
import back from '../../../img/back_arrow.svg';
import {services} from '../knowledgeData';

export const YearServices = () => {

    const base = '/knowledge-base/year-services/';

    return <div className={s.wrapper}>
        <Link to={'/knowledge-base'}><img src={back} alt={'back'}/><h6>Назад</h6></Link>
        <div className={s.header}>
            <NavLink activeClassName={s.active} to={base + 'Android'}><h3>Android</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'iOS'}><h3>iOS</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'MacOS'}><h3>MacOS</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'Windows'}><h3>Windows</h3></NavLink>
        </div>
    </div>
}

/*
<Route path={base + 'Android'} render={()=><Android services={services}/>}/>
<Route path={base + 'iOS'} render={()=><Android/>}/>
<Route path={base + 'MacOS'} render={()=><Android/>}/>
<Route path={base + 'Windows'} render={()=><Android/>}/>*/