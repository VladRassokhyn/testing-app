import React from 'react';
import { services } from './knowledgeData';
import {MenuItem} from "./MenuItem";
import s from "./MenuItem.module.scss";

export const KnowledgePage = () => {


    return <div className={s.wrapper}>
        {services.map(service => {
            return <MenuItem service={service} key={service.id}/>
        })}
    </div>
}