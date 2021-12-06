import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_GETINVOLVED_CONTENT, START_FETCHING_GETINVOLVED_CONTENT_WITH_SPINNER} from './getInvolvedActionTypes';
import { fetchingGetInvolvedContentFailure, fetchingGetInvolvedContentSuccess, getInvolvedSpinnerStarts, getInvolvedSpinnerStops} from './getInvolved.action';
import { fetchGetInvolvedContent} from '../../utils/api-calls/getInvolvedCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* getInvolvedFetch(){

    try {
        let fetchData = yield fetchGetInvolvedContent();
        yield put(fetchingGetInvolvedContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingGetInvolvedContentFailure(error))
    }
}

export function* getInvolvedFetchWithSpinner(){

    try {
        yield put(getInvolvedSpinnerStarts())

        let fetchData = yield fetchGetInvolvedContent();
        yield put(fetchingGetInvolvedContentSuccess(fetchData))
        yield put(getInvolvedSpinnerStops())

    } catch (error) {
        yield put(fetchingGetInvolvedContentFailure(error))
        // yield put(getInvolvedSpinnerStops())

    }
}



export function* startGetInvolvedFetch(){
    yield takeLatest(START_FETCHING_GETINVOLVED_CONTENT, getInvolvedFetch)

    
}
export function* startGetInvolvedFetchWithSpinner(){
    yield takeLatest(START_FETCHING_GETINVOLVED_CONTENT_WITH_SPINNER, getInvolvedFetchWithSpinner)

    
}

export function* getInvolvedMode(){
    yield all([call(startGetInvolvedFetch), call(startGetInvolvedFetchWithSpinner)])
}