import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_ABOUT_CONTENT, START_FETCHING_ABOUT_CONTENT_WITH_SPINNER} from './aboutActionTypes';
import { aboutSpinnerStarts, aboutSpinnerStops, fetchingAboutContentFailure, fetchingAboutContentSuccess} from './about.action';
import { fetchAboutContent} from '../../utils/api-calls/aboutCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* AboutFetch(){

    try {
        // yield put(startAuthSpinner())
        let fetchData = yield fetchAboutContent();
        yield put(fetchingAboutContentSuccess(fetchData))
        console.log("fetch data", fetchData)
        // yield put(stopAuthSpinner())
    } catch (error) {
        yield put(fetchingAboutContentFailure(error))
        // yield put(stopAuthSpinner())
    }
}
export function* AboutFetchWithSpinner(){

    try {
        yield put(aboutSpinnerStarts())
        let fetchData = yield fetchAboutContent();
        yield put(fetchingAboutContentSuccess(fetchData))
        yield put(aboutSpinnerStops())
    } catch (error) {
        yield put(fetchingAboutContentFailure(error))
        // yield put(aboutSpinnerStops())
    }
}



export function* startAboutFetch(){
    yield takeLatest(START_FETCHING_ABOUT_CONTENT, AboutFetch)
}

export function* startAboutFetchWithSpinner(){
        yield takeLatest(START_FETCHING_ABOUT_CONTENT_WITH_SPINNER, AboutFetchWithSpinner)  
}

export function* aboutMode(){
    yield all([call(startAboutFetch),call(startAboutFetchWithSpinner)])
}