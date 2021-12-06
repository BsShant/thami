import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { layoutReducer } from "./layoutStore/layoutStore.reducer";
import { authReducer } from "./authStore/auth.reducer";
import { userReducer } from "./userStore/userStore.reducer";
import { homeReducer } from "./homeStore/home.reducer";
import { eventReducer } from "./eventStore/event.reducer";
import { aboutReducer } from "./aboutStore/about.reducer";
import { publicationReducer } from "./publicationStore/publication.reducer";
import { getInvolvedReducer } from "./getInvolvedStore/getInvolved.reducer";
import { contactReducer } from "./contactStore/contact.reducer";
import { membershipReducer } from "./membershipStore/membership.reducer";
import { readerReducer } from "./readerStore/readerStore.reducer";
import { spinnerReducer } from "./spinnerStore/spinnerStore.reducer";
import { menuReducer } from "./menuStore/menuStore.reducer";
import { footerReducer } from "./footerStore/footer.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "readerStore",
    "menuStore",
    // "layoutStore",
    // "userStore",
    // "homeStore",
    // "eventStore",
    // "aboutStore",
    // 'publicationStore',
    // 'getInvolvedStore',
    // 'contactStore',
    // 'membershipStore',
    // 'footerStore',
    // 'spinnerStore'
  ],
};
const rootReducer = combineReducers({
  authStore: authReducer,
  layoutStore: layoutReducer,
  userStore: userReducer,
  homeStore: homeReducer,
  eventStore: eventReducer,
  aboutStore: aboutReducer,
  publicationStore: publicationReducer,
  getInvolvedStore: getInvolvedReducer,
  contactStore: contactReducer,
  membershipStore: membershipReducer,
  readerStore: readerReducer,
  spinnerStore: spinnerReducer,
  menuStore: menuReducer,
  footerStore: footerReducer,
});

export default persistReducer(persistConfig, rootReducer);
