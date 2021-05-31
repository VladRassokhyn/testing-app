import {Header} from "./pages/Header/Header";
import { Sidebar } from "./pages/Sidebar/Sidebar";
import s from './index.module.css';
import {Switch} from "react-router-dom";
import {routes, Routes} from "./lib/routes";
import * as React from "react";
import './index.sass';

export const App = () => {
    return (
        <div className={s.wrapper}>

            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.left}/>
            <div className={s.sidebar}>
                <Sidebar/>
            </div>
            <div className={s.content}>

                <Switch>
                    {routes.map((route, i) => (
                        <Routes key={i} {...route} />
                    ))}
                </Switch>

            </div>
            <div className={s.right}/>

        </div>
    );
}
