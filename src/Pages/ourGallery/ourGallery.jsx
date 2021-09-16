import React from 'react';
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
// import { Tab, Tabs } from "react-bootstrap";
// import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Photos from "./Photos";
import Video from "./Video";
import GoToTop from '../goToTop';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
    },
  }));
  
const Gallery=()=>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div>
               <div className="ourGalleryBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Our Gallery        </h2>

               
              </div>    
              </Container>
              </div>
              <Container>
        <div style={{ marginTop: "90px" }}>
          <h3
            className="topTitle text-center"
            style={{
              color: "#f6b745",
            }}
          >
            Our Gallery
          </h3>
          <p
            className="text-center"
            style={{
              fontSize: "18px",
            }}
          >
            We are a social unit commonality such as norms, religion, values,
            custom or indentity.
            <br /> Our communicaty communication platform.
          </p>
          <div className="align-middle" style={{marginTop:"50px"}}>
            <AppBar position="static" style={{ background: "#ffffff" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab
                  label="Photos"
                  {...a11yProps(0)}
                
                  style={{ color: "#000000" }}
                />
                <Tab
                  label="Video"
                  {...a11yProps(1)}
                  className="buttonNormal"
                  style={{ color: "#000000" }}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Photos />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Video />
            </TabPanel>
          </div>
        </div>
      </Container>
      <GoToTop />
              </div>)}


export default Gallery;