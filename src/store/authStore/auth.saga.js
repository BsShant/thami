import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  GET_USER, START_USER_AUTHENTICATION, START_USER_LOGOUT} from './authActionTypes';
import { userAuthFailure, userAuthSuccess, userLogoutSuccess, userLogoutFailure, getUserSuccess, getUserFailure, updateToken} from './auth.action';
import {  login, logout} from '../../utils/api-calls/authCalls';
import {updateUser} from '../userStore/userStore.actions'
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* userLogin(values){
    try {
        let fetchData = yield login(values.payload);
        yield put(updateUser(fetchData.user))
        yield put(updateToken(fetchData.token))
        yield put(userAuthSuccess())
    } catch (error) {
        yield put(userAuthFailure(error))
    }
}


export function* userLogout(){
    try {
        let fetchData = yield logout()
        yield put(updateUser(fetchData.user))
        yield put(updateToken(null))
        yield put(userLogoutSuccess())
    } catch (error) {
        yield put(userLogoutFailure(error))
    }
}

// export function* getUserProcess(){
//     try {
//         let fetchData = yield getUser()
//         yield put(updateUser(fetchData.user))
//         yield put(getUserSuccess())
//     } catch (error) {
//         yield put(getUserFailure(error))
//     }
// }



export function* startUserAuth(){

    yield takeLatest(START_USER_AUTHENTICATION,userLogin)
}

export function* startUserLogout(){
    yield takeLatest(START_USER_LOGOUT, userLogout)
}

// export function* currentUser(){
//     yield takeLatest(GET_USER, getUserProcess)
// }


export function* authMode(){
    yield all([call(startUserAuth), call(startUserLogout)])
}