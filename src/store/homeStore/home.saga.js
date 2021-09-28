import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_HOME_CONTENT} from './homeActionTypes';
import { fetchingHomeContentSuccess, fetchingHomeContentFailure} from './home.action';
import { fetchHomeContent} from '../../utils/api-calls/homeCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* homeFetch(){
    try {
        yield put(startAuthSpinner())
        let fetchData = yield fetchHomeContent();
        yield put(fetchingHomeContentSuccess(fetchData))
        yield put(stopAuthSpinner())
    } catch (error) {
        yield put(fetchingHomeContentFailure(error))
        yield put(stopAuthSpinner())
    }
}


export function* startHomeFetch(){
    yield takeLatest(START_FETCHING_HOME_CONTENT,homeFetch)
}



export function* homeMode(){
    yield all([call(startHomeFetch)])
}