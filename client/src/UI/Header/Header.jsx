import React, {useState} from 'react';
import s from './Header.module.css';
import {LoginMenuContainer} from "./LoginMenu/LoginMenuContainer";
import menu from './../../img/menu.svg'
import Sidebar from "../Sidebar/Sidebar";

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={s.wrapper}>
            <div className={s.menuButton} onClick={() => setIsOpen(!isOpen)}>
                <img src={menu} alt={''}/>
            </div>
            <div/>
            <div className={s.loginWrapper}>
                <LoginMenuContainer/>
            </div>

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

        </div>
    )
}