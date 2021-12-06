import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_HOME_CONTENT, START_FETCHING_HOME_CONTENT_WITH_SPINNER} from './homeActionTypes';
import { fetchingHomeContentSuccess, fetchingHomeContentFailure, homeSpinnerStarts, homeSpinnerStops} from './home.action';
import { fetchHomeContent} from '../../utils/api-calls/homeCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* homeFetch(){

    try {
        let fetchData = yield fetchHomeContent();
        yield put(fetchingHomeContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingHomeContentFailure(error))
    }
}
export function* homeFetchWithSpinner(){

    try {
        yield put(homeSpinnerStarts())
        let fetchData = yield fetchHomeContent();
        yield put(fetchingHomeContentSuccess(fetchData))
        yield put(homeSpinnerStops())

    } catch (error) {
        yield put(fetchingHomeContentFailure(error))
        // yield put(homeSpinnerStops())
    }
}



export function* startHomeFetch(){
    yield takeLatest(START_FETCHING_HOME_CONTENT, homeFetch)
    yield console.log("home saga called")

    
}

export function* startHomeFetchWithSpinner(){
    yield takeLatest(START_FETCHING_HOME_CONTENT_WITH_SPINNER, homeFetchWithSpinner)
    yield console.log("home saga called")

    
}

export function* homeMode(){
    yield all([call(startHomeFetch), call(startHomeFetchWithSpinner)])
}