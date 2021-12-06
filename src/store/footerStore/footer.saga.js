import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_FOOTER_CONTENT, START_FETCHING_FOOTER_CONTENT_WITH_SPINNER} from './footerActionTypes';
import { fetchingFooterContentSuccess, fetchingFooterContentFailure, footerSpinnerStarts, footerSpinnerStops} from './footer.action';
import { fetchFooterContent} from '../../utils/api-calls/footerCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* footerFetch(){

    try {
        let fetchData = yield fetchFooterContent();
        yield put(fetchingFooterContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingFooterContentFailure(error))
    }
}
export function* footerFetchWithSpinner(){

    try {
        yield put(footerSpinnerStarts())
        let fetchData = yield fetchFooterContent();
        yield put(fetchingFooterContentSuccess(fetchData))
        yield put(footerSpinnerStops())

    } catch (error) {
        yield put(fetchingFooterContentFailure(error))
        // yield put(footerSpinnerStops())
    }
}



export function* startFooterFetch(){
    yield takeLatest(START_FETCHING_FOOTER_CONTENT, footerFetch)
    yield console.log("home saga called")

    
}

export function* startFooterFetchWithSpinner(){
    yield takeLatest(START_FETCHING_FOOTER_CONTENT_WITH_SPINNER, footerFetchWithSpinner)

    
}

export function* footerMode(){
    yield all([call(startFooterFetch), call(startFooterFetchWithSpinner)])
}