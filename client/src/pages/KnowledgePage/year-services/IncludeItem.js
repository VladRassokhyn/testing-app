import React, {useEffect} from 'react';
import style from "./YearService.module.scss";

export const IncludeItem = ({item, i}) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isFirst, setIsFirst] = React.useState(true);

    const liStyle = isFirst ? style.isOpen : isOpen ? style.isClose : style.isOpen;
    const spanStyle = isFirst ? style.first_span : isOpen ? style.title_after_top : style.title_after_bot;

    useEffect(() => {
        if (isOpen === true)
            setIsFirst(false)
    }, [isOpen])

    return <div className={style.items}>
        <h4 onClick={() => setIsOpen(!isOpen)} className={style.item}>{i + 1 + '. '}
            {item.name}
            <span className={spanStyle}/>
        </h4>
        <h5 className={`${liStyle} ${style.subItem}`}>{item.description}</h5>
    </div>
}