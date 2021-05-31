import React from 'react';
import {TestsPage} from "../pages/Tests/TestsPage";
import {Route} from "react-router-dom";
import {AddTestPage} from "../pages/AddTest/AddTestPage";
import {UsersPage} from "../pages/Users/UsersPage";
import {LoginPage} from "../pages/Login/Login";
import {KnowledgePage} from "../pages/KnowledgePage/KnowledgePage";
import {YearServices} from "../pages/KnowledgePage/year-services/YearServices";



export const routes = [
    {
        path: "/tests/:testId?",
        component: TestsPage
    },
    {
        path: "/add-test",
        component: AddTestPage,
    },
    {
        path: "/users/:userId?",
        component: UsersPage,
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/knowledge-base",
        exact: true,
        component: KnowledgePage
    },
    {
        path: "/knowledge-base/year-services",
        component: YearServices,
    },
]

export const Routes = (route) => {
    return <Route
        path={route.path}
        render={props => (
            <route.component {...props} routes={route.routes}/>
        )}
    />
}