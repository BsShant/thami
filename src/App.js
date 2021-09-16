import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React,{useEffect} from "react";
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
import BeMember from "./Pages/beMember/beMember";
import Support from "./Pages/supportCommunity/supportCommunity";
import Sponser from "./Pages/sponser/sponser";
import PressRelease from "./Pages/pressRelease/pressRelease";
import NewsPost from "./Pages/news post/ResourcePreview";
import BlogPost from "./Pages/blogPost/ResourcePreview";
import ArticlePost from "./Pages/articlePost/ResourcePreview";









import ResourcePreview from "./Pages/ResourcePreview";

// import Appcss from "./App.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Footer from "../src/Pages/Footer";
function App() {
  // // const routePath = useLocation()
  // const scrollTop=()=>{
  //   window.scrollTo(0,0)

  // }
  // useEffect(()=>{
  //   scrollTop()
  // },[0])
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
          <Route exact path="/getInvolved" component={GetInvolved} />
          <Route path="/resourcepreview" component={ResourcePreview} />
          <Route path="/supportcommunity" component={SupportCommunity} />
          <Route exact path="/event" component={Events} />
          <Route path="/contact-us" component={ContactPage} />

          <Route path="/event/news" component={News} />
          <Route path="/event/news-post" component={NewsPost} />
          <Route path="/event/blog-post" component={BlogPost} />
          <Route path="/event/article-post" component={ArticlePost} />


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
          <Route path="/publication/press-release" component={PressRelease} />
          <Route path="/getInvolved/be-member" component={BeMember} />
          <Route path="/getInvolved/support" component={Support} />
          <Route path="/getInvolved/sponser" component={Sponser} />














        <ContactUs />
        <Footer />
      </div>
      </Switch>

      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
