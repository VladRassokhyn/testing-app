import React, {useEffect} from 'react';
import {Field, Form} from "react-final-form";
import {useDispatch, useSelector} from "react-redux";
import {TestsPage} from "../Tests/TestsPage";
import {usersThunks} from "../../lib/Creators/ThunkCreators";
import s from './Login.module.css';
import {Button} from "../../common/Button";

export const LoginPage = () => {

    const isAuth = useSelector(state => state.authUser.isAuth);
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersPage.users);

    const onSubmit = (formData) => {
        users.forEach(user => {
            if (user.email.toLowerCase() === formData.email.toLowerCase() && user.password === formData.password) {
                dispatch(usersThunks.postAuthUser(user));
            }
            if (!users.find(user => user.email.toLowerCase() === formData.email.toLowerCase() && user.password === formData.password)) {
                alert('incorrect email or password')
            }
        })
    }

    useEffect(() => {
        dispatch(usersThunks.getUsers());
    }, [isAuth, dispatch])

    return !isAuth ?
        <div className={s.wrapper}>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit}) => {
                    return (
                        <div className={s.container}>
                            <form onSubmit={handleSubmit}>
                                <h1>ВХОД</h1>
                                <div className={s.email}>
                                    <label>Email</label>
                                    <Field
                                        name={'email'}
                                        component={'input'}
                                        type={'text'}
                                        placeholder={'email'}
                                        autoComplete={'username'}
                                    />
                                </div>
                                <div className={s.password}>
                                    <label>Password</label>
                                    <Field
                                        name={'password'}
                                        component={'input'}
                                        type={'password'}
                                        placeholder={'password'}
                                        autoComplete={'current-password'}
                                    />
                                </div>
                                <Button text={'Войти'} type={'submit'}/>
                            </form>
                        </div>
                    )
                }}/>
        </div>

        : <TestsPage/>
}