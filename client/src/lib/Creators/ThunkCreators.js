import {testsAPI, usersAPI} from "../API";
import {testActions, usersActions} from "./ActionCreators";

export const testThunks = {

    getTest: (testId) => async (dispatch) => {
        dispatch(testActions.setIsFetchingSingleTest(true));
        try {
            const res = await testsAPI.getTest(testId)
            dispatch(testActions.setTest(res.data));
            dispatch(testActions.setIsFetchingSingleTest(false));
        } catch (e) {
            console.log(e.message);
        }
    },

    getTests: () => async (dispatch) => {
        try {
            const res = await testsAPI.getTests();
            dispatch(testActions.setTests(res.data));
            dispatch(testActions.setIsFetchingTests(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    postNewTest: (test) => async (dispatch) => {
        try {
            await testsAPI.postTest(test);
            dispatch(testActions.setNewTest(test));
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const usersThunks = {

    getUsers: () => async (dispatch) => {
        dispatch(usersActions.setIsFetchingUsers(true));
        try {
            const res = await usersAPI.getUsers();
            dispatch(usersActions.setUsers(res.data));
            dispatch(usersActions.setIsFetchingUsers(false));
        } catch (e) {
            console.log(e.message)
        }
    },

    getUser: (userId) => async (dispatch) => {
        dispatch(usersActions.setIsFetchingUser(true));
        try {
            const res = await usersAPI.getUser(userId);
            dispatch(usersActions.setUser(res.data))
            dispatch(usersActions.setIsFetchingUser(false));
        } catch (e) {
            console.log(e.message)
        }
    }
}