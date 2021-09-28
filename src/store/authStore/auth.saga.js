import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_USER_AUTHENTICATION, START_USER_LOGOUT} from './authActionTypes';
import { userAuthFailure, userAuthSuccess, userLogoutSuccess, userLogoutFailure} from './auth.action';
import { login, logout} from '../../utils/api-calls/authCalls';
import {updateUser} from '../userStore/userStore.actions'
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* userLogin(values){
    try {
        yield put(startAuthSpinner())
        let fetchData = yield login(values.payload);
        yield put(updateUser(fetchData.user))
        yield put(userAuthSuccess())
        yield put(stopAuthSpinner())
    } catch (error) {
        yield put(userAuthFailure(error))
        yield put(stopAuthSpinner())
    }
}

// export function* getUserData(token){
//     try {
//         let fetchData = yield getUser(token)
//         yield put(authUser(fetchData.data))
//         yield call(role, fetchData.data._id, token)
//     } catch (error) {
//         yield put(userAuthFailure(error))
//         yield put(stopAuthSpinner())
//     } 

// }


export function* userLogout(){
    try {
        let fetchData = yield logout()
        yield put(updateUser(null))
        yield put(userLogoutSuccess())
    } catch (error) {
        yield put(userLogoutFailure(error))
    }
}
// export function* userRegistration(formData){
//     try{
//         yield put(startPostingSpinner())
//         let fetchData = yield register(formData.payload)
//         yield put(userRegistrationSuccess(fetchData.data))
//         yield put(stopPostingSpinner())
//     }catch(error){
//         yield put(userRegistrationFailure(error))
//         yield put(stopPostingSpinner())

//     }
//        }




export function* startUserAuth(){
    yield takeLatest(START_USER_AUTHENTICATION,userLogin)
}

export function* startUserLogout(){
    yield takeLatest(START_USER_LOGOUT, userLogout)
}


export function* authMode(){
    yield all([call(startUserAuth), call(startUserLogout)])
}