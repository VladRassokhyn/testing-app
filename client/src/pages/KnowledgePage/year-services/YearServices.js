import React from 'react';
import {Link, NavLink, Route} from "react-router-dom";
import s from './YearService.module.scss';
import back from '../../../img/back_arrow.svg';
import {services} from '../knowledgeData';
import {Info} from "./Info";
import SlideRoutes from "react-slide-routes";
import {useLocation} from "react-router";

export const YearServices = () => {

    const location = useLocation();
    const base = '/knowledge-base/year-services/';

    return <div className={s.wrapper}>
        <Link to={'/knowledge-base'}><img src={back} alt={'back'}/><h6>Назад</h6></Link>
        <div className={s.header}>
            <NavLink activeClassName={s.active} to={base + 'Android'}><h3>Android</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'iOS'}><h3>iOS</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'MacOS'}><h3>MacOS</h3></NavLink>
            <NavLink activeClassName={s.active} to={base + 'Windows'}><h3>Windows</h3></NavLink>
        </div>
        <SlideRoutes location={location}>
            {services[0].os.map(
                (os, i) => <Route
                    key={i}
                    path={base + os.name}
                    render={() => <Info service={os.inner}/>}
                />
            )}
        </SlideRoutes>
    </div>
}