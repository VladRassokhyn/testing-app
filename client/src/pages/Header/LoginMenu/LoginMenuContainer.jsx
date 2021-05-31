import React from 'react';
import {LoginMenu} from "./LoginMenu";
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

export const LoginMenuContainer = () => {

    let isAuth = true

    return isAuth
        ? <LoginMenu />
        : <NavLink to={'/login'} className={s.inner}>
            <div className={s.name}>
                <h1>Login In</h1>
            </div>
        </NavLink>
}