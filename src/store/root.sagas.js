import { call, all } from "redux-saga/effects";
import { homeMode } from "./homeStore/home.saga";
import { authMode } from "./authStore/auth.saga";


export default function* rootSaga() {
  yield all([
    call(authMode),
    call(homeMode),
  ]);
}
