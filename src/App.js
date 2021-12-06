import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React,{useEffect} from "react";
import IndexRoute from './routes/index';
import {  fetchingHomeContentWithSpinnerStarts} from './store/homeStore/home.action'
import {  fetchingEventContentWithSpinnerStarts} from './store/eventStore/event.action'
import {  fetchingAboutContentWithSpinnerStarts} from './store/aboutStore/about.action'
import {  fetchingPublicationContentWithSpinnerStarts} from './store/publicationStore/publication.action'
import {  fetchingContactContentWithSpinnerStarts} from './store/contactStore/contact.action'
import "../node_modules/video-react/dist/video-react.css"; // import css
import ReactGA from 'react-ga';

import {  getUser, updateToken} from './store/authStore/auth.action';

// import Appcss from "./App.css";
import { useDispatch } from 'react-redux';
import { updateUser } from "./store/userStore/userStore.actions";
import {  fetchingGetInvolvedContentWithSpinnerStarts } from "./store/getInvolvedStore/getInvolved.action";
import {  fetchingMembershipContentWithSpinnerStarts } from "./store/membershipStore/membership.action";
import { fetchingFooterContentWithSpinnerStarts } from "./store/footerStore/footer.action";

const App =()=> {
  const dispatch = useDispatch()
  useEffect(()=>{
    ReactGA.initialize('UA-209758317-1');
ReactGA.pageview(window.location.pathname + window.location.search);
try{
  // dispatch(startFetchingSpinner())
  dispatch(fetchingHomeContentWithSpinnerStarts())
  dispatch(fetchingFooterContentWithSpinnerStarts())
  dispatch(fetchingEventContentWithSpinnerStarts())
  dispatch(fetchingAboutContentWithSpinnerStarts())
  dispatch(fetchingPublicationContentWithSpinnerStarts())
  dispatch(fetchingGetInvolvedContentWithSpinnerStarts())
  dispatch(fetchingContactContentWithSpinnerStarts())
  dispatch(fetchingMembershipContentWithSpinnerStarts())
  // dispatch(stopFetchingSpinner())

}catch(error){
  console.log("failed",error)
}
   


    
    if(localStorage.getItem("thamiUser")){
      const user  = JSON.parse(localStorage.getItem("thamiUser"))
      dispatch(updateUser(user))
    }
    else{
      dispatch(getUser())
    }
     
    if(localStorage.getItem("thamiToken")){
      const token  = JSON.parse(localStorage.getItem("thamiToken"))
      dispatch(updateToken(token))
    }

  },[])  
  return (
    <React.Fragment style={{whiteSpace:"pre-Line"}}>
      
     <IndexRoute />
    </React.Fragment>
  );
}

export default  App;
