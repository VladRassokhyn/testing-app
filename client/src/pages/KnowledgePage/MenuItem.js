import React, {useEffect} from 'react';
import s from './MenuItem.module.scss';
import {Link} from "react-router-dom";

export const MenuItem = ({service}) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);

    const liStyle = `${isFirst ? s.first : isOpen ? s.visible : s.invisible} ${s.list_item}`;
    const spanStyle = isFirst ? s.first_span : isOpen ? s.title_after_top : s.title_after_bot;

    useEffect(() => {
        if (isOpen === true)
            setIsFirst(false)
    }, [isOpen])

    return <div>
        <ul
            onClick={() => setIsOpen(!isOpen)}
            className={s.title}
        >
            {service.name}
            <span className={spanStyle}/>
        </ul>
        {service.os.map(os => {
            return <Link key={os.name} to={`/knowledge-base/${service.path}${os.name}`}>
                <li className={liStyle}>
                    <img className={s.icon} src={os.image} alt={''}/>
                    {os.name}
                </li>
            </Link>
        })}
    </div>
}