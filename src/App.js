import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import NavigationBar from "./HeaderCompenent/NavigationBar";
import GetInvolved from "./Pages/GetInvolved";
import Publication from "./Pages/Publication";
import SupportCommunity from "./Pages/SupportCommunity";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Event";
import News from "./Pages/news/news";
import Blogs from "./Pages/blogs/blogs";
import OurArticles from "./Pages/ourArticles/ourArticles";


import ResourcePreview from "./Pages/ResourcePreview";

// import Appcss from "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../src/Pages/Footer";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/publication" component={Publication} />
          <Route path="/getinvolved" component={GetInvolved} />
          <Route path="/resourcepreview" component={ResourcePreview} />
          <Route path="/supportcommunity" component={SupportCommunity} />
          <Route exact path="/event" component={Events} />
          <Route path="/event/news" component={News} />
          <Route path="/event/blogs" component={Blogs} />
          <Route path="/event/our-articles" component={OurArticles} />



        </Switch>
        <ContactUs />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
