import React, {useState} from 'react';
import s from "../Header.module.css";
import avatar from "../../../img/user.png";

export const LoginMenu = () => {
    const [isModal, setIsModal] = useState(false);

    return <div
        className={s.loginContainer}
        onClick={() => setIsModal(!isModal)}
        onMouseLeave={() => setIsModal(false)}
    >
        <div className={s.inner}>
            <div className={s.name}>
                <h1>Name</h1>
                <h1>LastName</h1>
            </div>
            <img src={avatar} alt={''}/>
        </div>

        {isModal && <button
            onClick={()=> {
                setIsModal(false);
            }}
            className={s.logout}
        >Logout</button>
        }
    </div>


}