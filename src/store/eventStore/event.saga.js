import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_EVENT_CONTENT, START_FETCHING_EVENT_CONTENT_WITH_SPINNER} from './eventActionTypes';
import { fetchingEventContentSuccess, fetchingEventContentFailure, eventSpinnerStarts, eventSpinnerStops} from './event.action';
import { fetchEventContent} from '../../utils/api-calls/eventCalls ';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* eventFetch(){

    try {
        let fetchData = yield fetchEventContent();
        yield put(fetchingEventContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingEventContentFailure(error))
    }
}
export function* eventFetchWithSpinner(){

    try {
        yield put(eventSpinnerStarts())

        let fetchData = yield fetchEventContent();
        yield put(fetchingEventContentSuccess(fetchData))
        yield put(eventSpinnerStops())

    } catch (error) {
        yield put(fetchingEventContentFailure(error))
        // yield put(eventSpinnerStops())

    }
}



export function* startEventFetch(){
    yield takeLatest(START_FETCHING_EVENT_CONTENT, eventFetch)

    
}
export function* startEventFetchWithSpinner(){
    yield takeLatest(START_FETCHING_EVENT_CONTENT_WITH_SPINNER, eventFetchWithSpinner)

    
}

export function* eventMode(){
    yield all([call(startEventFetch), call(startEventFetchWithSpinner)])
}