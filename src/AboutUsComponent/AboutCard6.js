import React from "react";
// import { Tab, Tabs } from "react-bootstrap";
// import { Paper } from "@material-ui/core";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Photos from "./Photos";
import Video from "./Video";
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
const AboutCard6 = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Container>
        <div style={{ marginTop: "20px" }}>
          <p
            className="text-center"
            style={{
              fontSize: "22px",
              color: "#f6b745",
              fontWeight: "bold",
            }}
          >
            Our Gallery
          </p>
          <p
            className="text-center"
            style={{
              fontSize: "19px",
              fontWeight: "bold",
            }}
          >
            We are a social unit commonality such as norms, religion, values,
            custom or indentity.
            <br /> Our communicaty communication platform.
          </p>
          <div className="align-middle">
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
    </React.Fragment>
  );
};
export default AboutCard6;
