import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_PUBLICATION_CONTENT, START_FETCHING_PUBLICATION_CONTENT_WITH_SPINNER} from './publicationActionTypes';
import {  fetchingPublicationContentSuccess, fetchingPublicationContentFailure, publicationSpinnerStarts, publicationSpinnerStops} from './publication.action';
import { fetchPublicationContent} from '../../utils/api-calls/publicationCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* publicationFetch(){

    try {
        let fetchData = yield fetchPublicationContent();
        yield put(fetchingPublicationContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingPublicationContentFailure(error))
    }
}

export function* publicationFetchWithSpinner(){

    try {
        yield put(publicationSpinnerStarts())
        let fetchData = yield fetchPublicationContent();
        yield put(fetchingPublicationContentSuccess(fetchData))
        yield put(publicationSpinnerStops())

    } catch (error) {
        yield put(fetchingPublicationContentFailure(error))
        // yield put(publicationSpinnerStops())

    }
}



export function* startPublicationFetch(){
    yield takeLatest(START_FETCHING_PUBLICATION_CONTENT, publicationFetch)

    
}

export function* startPublicationFetchWithSpinner(){
    yield takeLatest(START_FETCHING_PUBLICATION_CONTENT_WITH_SPINNER, publicationFetchWithSpinner)

    
}

export function* publicationMode(){
    yield all([call(startPublicationFetch), call(startPublicationFetchWithSpinner)])
}