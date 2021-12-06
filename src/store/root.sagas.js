import { call, all } from "redux-saga/effects";
import { homeMode } from "./homeStore/home.saga";
import { authMode } from "./authStore/auth.saga";
import { eventMode} from "./eventStore/event.saga";
import { aboutMode} from "./aboutStore/about.saga";
import { publicationMode} from "./publicationStore/publication.saga";
import { getInvolvedMode} from "./getInvolvedStore/getInvolved.saga";
import { contactMode} from "./contactStore/contact.saga";
import { membershipMode} from "./membershipStore/membership.saga";
import { footerMode } from "./footerStore/footer.saga";

export default function* rootSaga() {
  yield all([
    call(authMode),
    call(homeMode),
    call(eventMode),
    call(aboutMode),
    call(publicationMode),
    call(getInvolvedMode),
    call(contactMode),
    call(membershipMode),
    call(footerMode)


  ]);
}
