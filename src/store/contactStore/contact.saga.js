import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_CONTACT_CONTENT, START_FETCHING_CONTACT_CONTENT_WITH_SPINNER} from './contactActionTypes';
import {  fetchingContactContentSuccess, fetchingContactContentFailure, contactSpinnerStarts, contactSpinnerStops} from './contact.action';
import { fetchContactContent} from '../../utils/api-calls/contactCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* contactFetch(){

    try {
        let fetchData = yield fetchContactContent();
        yield put(fetchingContactContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingContactContentFailure(error))
    }
}

export function* contactFetchWithSpinner(){

    try {
        yield put(contactSpinnerStarts())
        let fetchData = yield fetchContactContent();
        yield put(fetchingContactContentSuccess(fetchData))
        yield put(contactSpinnerStops())
    } catch (error) {
        yield put(fetchingContactContentFailure(error))
        // yield put(contactSpinnerStops())

    }
}



export function* startContactFetch(){
    yield takeLatest(START_FETCHING_CONTACT_CONTENT, contactFetch)

    
}

export function* startContactFetchWithSpinner(){
    yield takeLatest(START_FETCHING_CONTACT_CONTENT_WITH_SPINNER, contactFetchWithSpinner)

    
}


export function* contactMode(){
    yield all([call(startContactFetch),call(startContactFetchWithSpinner)])
}