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
import OurStory from "./Pages/ourStory/ourStory";
import VisionAndMission from "./Pages/visionAndMission/visionAndMission";
import OurTeam from "./Pages/ourTeam/ourTeam";
import OurGallery from "./Pages/ourGallery/ourGallery";
import DonateUs from "./Pages/donate/donate";
import Membership from "./Pages/membership/membership";
import Books from "./Pages/books/books";
import Resources from "./Pages/resources/resources";
import ContactPage from "./Pages/contactUs/contactUs";








import ResourcePreview from "./Pages/ResourcePreview";

// import Appcss from "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../src/Pages/Footer";
function App() {
  return (
    <React.Fragment>
      
      <BrowserRouter>
      <Switch>
      <Route path="/getinvolved/membership" component={Membership} />
      <div>
      <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/publication" component={Publication} />
          <Route exact path="/getinvolved" component={GetInvolved} />
          <Route path="/resourcepreview" component={ResourcePreview} />
          <Route path="/supportcommunity" component={SupportCommunity} />
          <Route exact path="/event" component={Events} />
          <Route path="/contact-us" component={ContactPage} />

          <Route path="/event/news" component={News} />
          <Route path="/event/blogs" component={Blogs} />
          <Route path="/event/our-articles" component={OurArticles} />
          <Route path="/about/our-story" component={OurStory} />
          <Route path="/about/vision-and-mission" component={VisionAndMission} />
          <Route path="/about/our-team" component={OurTeam} />
          <Route path="/about/our-gallery" component={OurGallery} />
          <Route path="/getinvolved/donate-us" component={DonateUs} />
          <Route path="/getinvolved/membership" component={Membership} />
          <Route path="/publication/our-books" component={Books} />
          <Route path="/publication/our-resources" component={Resources} />











        <ContactUs />
        <Footer />
      </div>
      </Switch>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
