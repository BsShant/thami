import React from 'react';
import Body from './body/body.layout';
import Header from '../../HeaderCompenent/NavigationBar';
import Footer from '../../Pages/Footer';

const PublicLayout = (props)=>{

    return(
        <div>
<Header />
<Body {...props}/>
<Footer />
        </div>
    )
}

export default PublicLayout;