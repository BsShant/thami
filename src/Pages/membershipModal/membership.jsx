import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import { Form, Input, Button } from 'antd';
import GoToTop from '../goToTop';

const Membership = ()=>{

    return(
<div>
    <div style={{}}>
        <Container>
            <div className="row" style={{borderBottom:"1px solid grey",margin:"100px 0"}}>
                <div className="col">
                    <h2>Membership Application</h2>
                    <p>To apply for membership please fill in the form</p>
                </div>
            </div>
           
            <div className="row" style={{paddingBottom:"100px"}}>
                <div className="col">
                <form>

                    {/* name */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="firstName"><h3>Name</h3> </label>

                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12 inputBox">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 inputContainer" style={{paddingRight:"0"}}><input type="text" id="firstName" style={{width:"100%"}}></input>
                    <p className="inputBelow">First Name</p></div>
                            <div className="sexondBox col-md-6 col-sm-12 col-xs-12 col-lg-6 inputContainer" style={{paddingRight:"0"}}><input type="text" id="lastName" style={{width:"100%"}}></input>
                    <p className="inputBelow">Last Name</p></div>
                    
                    </div>
                    </div>
                    </div>


                    {/* addrress */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="address"><h3>Address</h3></label>

                        </div>

                        <div className="col-md-8 col-sm-12 col-xs-12 inputBox">
                            
                        {/* address first row */}
                        <div className="row">
                            <div className=" col-12 inputContainer" style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">Street Adress</p></div>
                    </div>
                   
                   {/* address second row */}
                   <div className="row">
                            <div className=" col-12 inputContainer"  style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">Street Adress Line 2</p></div>
                    </div>
                   
                   
                    {/* address third row */}
                    <div className="row">
                            <div className=" inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">City</p></div>
                            <div className=" sexondBox inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6"style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">State / Province</p></div>
                    
                    </div>

                    {/* address fourth row */}
                    <div className="row">
                            <div className=" inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">Postal/ Zip Code</p></div>
                            <div className="sexondBox inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="address" style={{width:"100%"}}></input>
                    <p className="inputBelow">Country</p></div>
                    
                    </div>
                    </div>
                    </div>
                    

                {/* email */}
                <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="email"><h3>Email</h3></label>

                        </div>

                        <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox" style={{paddingRight:"0"}}>
                            
                        <input type="email" id="email" style={{width:"100%"}}></input>
                    <p className="inputBelow">email@example.com</p>                        
                    </div>
                    </div>

                {/* Home Number */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="homeNumber"><h3>Home Number</h3></label>

                        </div>
                        <div className=" col-md-8 col-sm-12 col-xs-12 inputBox" >
                        <div className="row">
                            <div className=" inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="homeNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Area Code</p></div>
                            <div className="sexondBox inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="homeNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Phone Number</p></div>
                    
                    </div>
                    </div>
                    </div>

                    {/* Cellular Number */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="cellularNumber"><h3>Cellular Number</h3></label>

                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12 inputBox">
                        <div className="row">
                            <div className=" inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="cellularNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Area Code</p></div>
                            <div className="sexondBox inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="cellularNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Phone Number</p></div>
                    
                    </div>
                    </div>
                    </div>

                    {/* Work Number */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="workNumber"><h3>Work Number</h3></label>

                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12 inputBox">
                        <div className="row">
                            <div className=" inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="workNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Area Code</p></div>
                            <div className="sexondBox inputContainer col-md-6 col-sm-12 col-xs-12 col-lg-6" style={{paddingRight:"0"}}><input type="text" id="workNumber" style={{width:"100%"}}></input>
                    <p className="inputBelow">Phone Number</p></div>
                    
                    </div>
                    </div>
                    </div>

                    {/* message */}
                    <div className="row inputField">
                        <div className="inputLabel col-md-4 col-sm-12 col-xs-12">
                        <label for="message"><h3>Message</h3></label>

                        </div>

                        <div className="inputContainer col-md-8 col-sm-12 col-xs-12 inputBox" style={{paddingRight:"0"}}>
                            
                        <textarea type="textarea" rows="4" cols="50" id="message" style={{width:"100%"}}></textarea>
                        <p className="inputBelow">Message</p>

                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 modalButton" style={{paddingRight:"0"}}>   <button className="buttonReverse">Apply</button>
</div>
                    </div>
                </form>
                </div>
            </div>
        </Container>
    </div>
    <GoToTop />
</div>
    )
}

export default Membership;