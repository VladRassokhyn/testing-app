import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

type P = {
    isOpen?: boolean
    setIsOpen?: (isOpen: boolean) => void
}

export const Sidebar: React.FC<P> = ({isOpen, setIsOpen}) => {

    const isAdmin = true

    return (
        <div>
            <div className={`${s.wrapper} ${isOpen && s.animOpen}`}>
                <div className={s.navBlock}>
                    <NavLink activeClassName={s.active} to={'/tests'} onClick={()=>setIsOpen && setIsOpen(false)}>
                        <div className={s.navItem}>Тесты</div>
                    </NavLink>
                </div>
                {isAdmin && <div className={s.navBlock}>
                    <NavLink activeClassName={s.active} to={'/users'} onClick={()=>setIsOpen && setIsOpen(false)}>
                        <div className={s.navItem}>Пользователи</div>
                    </NavLink>
                    <NavLink activeClassName={s.active} to={'/add-test'} onClick={()=>setIsOpen && setIsOpen(false)}>
                        <div className={s.navItem}>Создать тест</div>
                    </NavLink>
                </div>
                }
            </div>
        </div>
    )
}
