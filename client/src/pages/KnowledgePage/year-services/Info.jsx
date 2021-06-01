import React from 'react';
import style from './YearService.module.scss';
import ReactTouchEvents from "react-touch-events";
import {IncludeItem} from "./IncludeItem";

export const Info = ({service}) => {


    const handleSwipe = (e, direction) => {
        console.log(direction)
    }

    return <div>
        {service.map((serv, i) => {
            return <ReactTouchEvents
                key={i}
                onSwipe={handleSwipe}
            >
                <div className={style.innerWrapper}>
                    <h2>{serv.name}</h2>
                    <img src={serv.photo} alt={serv.name}/>
                    <div className={style.itemWr}>
                        {serv.include.map((inc, i) => <IncludeItem key={i} i={i} item={inc}/>)}
                    </div>
                </div>

            </ReactTouchEvents>
        })}
    </div>
}