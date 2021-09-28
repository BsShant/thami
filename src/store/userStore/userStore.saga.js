// import {put, call, takeLatest, all} from 'redux-saga/effects';
// import { UPDATE_USER} from './userStore.Types';
// import { updateUser} from './userStore.actions';
// import { getAllUsers, getSingleUser } from '../../utils/api-calls/userCalls';
// import {startFetchingSpinner, stopFetchingSpinner } from '../spinnerStore/spinnerStore.action';


// export function* fetchingUsers(data){
//     try{
//         yield put(startFetchingSpinner())
//         let fetchData = yield getAllUsers(data.payload)
//         yield put(fetchingUsersSuccess(fetchData))
//         yield put(stopFetchingSpinner())
//     }catch(error){
//         yield put(fetchingUsersFailure(error))
//         yield put(stopFetchingSpinner())
//     }
// }
// export function* fetchingUser(data){
//     try{
//         yield put(startFetchingSpinner())
//         let fetchData = yield getSingleUser(data.payload)
//         yield put(fetchingUserSuccess(fetchData))
//         yield put(stopFetchingSpinner())
//     }catch(error){
//         yield put(fetchingUserFailure(error))
//         yield put(stopFetchingSpinner())
//     }
// }

// export function* fetchingUserStarts(){
//     yield takeLatest(START_FETCHING_SINGLE_USER, fetchingUser)
// }

// export function* fetchingUsersStarts(){
//         yield takeLatest(START_FETCHING_ALL_USERS, fetchingUsers)
// }



// export function* fetchUser(){
//     yield all([call(fetchingUsersStarts), call(fetchingUserStarts)]);
// }