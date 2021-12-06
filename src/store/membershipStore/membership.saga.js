import { takeLatest, call, put, all } from 'redux-saga/effects';
import {  START_FETCHING_MEMBERSHIP_CONTENT, START_FETCHING_MEMBERSHIP_CONTENT_WITH_SPINNER} from './membershipActionTypes';
import {  fetchingMembershipContentSuccess, fetchingMembershipContentFailure, membershipSpinnerStarts, membershipSpinnerStops} from './membership.action';
import { fetchMembershipContent} from '../../utils/api-calls/membershipCalls';
import { startAuthSpinner, stopAuthSpinner} from '../spinnerStore/spinnerStore.action';

export function* membershipFetch(){

    try {
        let fetchData = yield fetchMembershipContent();
        yield put(fetchingMembershipContentSuccess(fetchData))
    } catch (error) {
        yield put(fetchingMembershipContentFailure(error))
    }
}

export function* membershipFetchWithSpinner(){

    try {
        yield put(membershipSpinnerStarts())

        let fetchData = yield fetchMembershipContent();
        yield put(fetchingMembershipContentSuccess(fetchData))
        yield put(membershipSpinnerStops())

    } catch (error) {
        yield put(fetchingMembershipContentFailure(error))
        // yield put(membershipSpinnerStops())

    }
}



export function* startMembershipFetch(){
    yield takeLatest(START_FETCHING_MEMBERSHIP_CONTENT, membershipFetch)

    
}

export function* startMembershipFetchWithSpinner(){
    yield takeLatest(START_FETCHING_MEMBERSHIP_CONTENT_WITH_SPINNER, membershipFetchWithSpinner)

    
}

export function* membershipMode(){
    yield all([call(startMembershipFetch),call(startMembershipFetchWithSpinner)])
}