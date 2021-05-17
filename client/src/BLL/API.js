import axios from "axios";

const instance = axios.create({
    baseURL: `http://172.17.142.80:4000/`,
    headers: {
        withCredentials: true
    }
});

export const testsAPI = {

    getTests() {
        return instance.get(`tests`);
    },

    getTest(testId) {
        return instance.get('tests/' + testId);
    },

    postTest(test) {
        return instance.post('tests/', test)
    }
}

export const usersAPI = {

    getUsers() {
        return instance.get('users')
    },

    getUser(userId) {
        return instance.get(`users/${userId}`)
    },

    updateUser(userId, data) {
        return instance.patch(`users/${userId}`, data)
    }
}