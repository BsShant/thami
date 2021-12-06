import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { useSelector } from 'react-redux';
import Logo from "../../assests/Logo.png";

import './styles.css'


const TransitionComponent = (PassedComponent) => {
    const Spinner = (props) => {
        const aboutSpinner = useSelector(state=>state.aboutStore.aboutSpinner)
        const homeSpinner = useSelector(state=>state.homeStore.homeSpinner)
        const eventSpinner = useSelector(state=>state.eventStore.eventSpinner)
        const getInvolvedSpinner = useSelector(state=>state.getInvolvedStore.getInvolvedSpinner)
        const publicationSpinner = useSelector(state=>state.publicationStore.publicationSpinner)
        const contactSpinner = useSelector(state=>state.contactStore.contactSpinner)
        const membershipSpinner = useSelector(state=>state.membershipStore.membershipSpinner)
        const footerSpinner = useSelector(state=>state.footerStore.footerSpinner)

        const spinnerItem = <div className="spinnerContainer">
            <div className="spinnerDiv">
            <img src={Logo} style={{ height: "100%", width: "100%" }}></img>

            </div>
        </div>
        return (
            <div>
                {
                    aboutSpinner||homeSpinner||eventSpinner||getInvolvedSpinner||publicationSpinner||contactSpinner||membershipSpinner || footerSpinner ?   spinnerItem : <PassedComponent {...props} />
                }
      
            </div>
        )
    }
    const mapStateToProps = state => ({
        authSpinner: state.spinnerStore.authSpinner

    })
    return connect(mapStateToProps)(Spinner);
}

export default TransitionComponent;