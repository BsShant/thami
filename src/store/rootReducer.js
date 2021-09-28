import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {layoutReducer} from './layoutStore/layoutStore.reducer';
import {userReducer} from './userStore/userStore.reducer';
import {homeReducer} from './homeStore/home.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}
const rootReducer = combineReducers({
    layoutStore: layoutReducer,
    userStore: userReducer,
    homeStore: homeReducer

})

export default persistReducer(persistConfig, rootReducer);