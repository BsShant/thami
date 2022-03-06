import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React,{useEffect} from "react";
import Home from "../../Pages/home/Home";
import About from "../../Pages/AboutUs";
import NavigationBar from "../../HeaderCompenent/NavigationBar";
import GetInvolved from "../../Pages/GetInvolved";
import Publication from "../../Pages/Publication";
import SupportCommunity from "../../Pages/SupportCommunity";
import ContactUs from "../../Pages/ContactUs";
import Events from "../../Pages/Event";
import News from "../../Pages/news/news";
import Blogs from "../../Pages/blogs/blogs";
import OurArticles from "../../Pages/ourArticles/ourArticles";
import OurStory from "../../Pages/ourStory/ourStory";
import VisionAndMission from "../../Pages/visionAndMission/visionAndMission";
import OurTeam from "../../Pages/ourTeam/ourTeam";
import OurGallery from "../../Pages/ourGallery/ourGallery";
import DonateUs from "../../Pages/donate/donate";
import Membership from "../../Pages/membership/membership";
import Books from "../../Pages/books/books";
import Resources from "../../Pages/resources/resources";
import ContactPage from "../../Pages/contactUs/contactUs";
import DummyPage from "../../Pages/contactUs/dummy";
import BeMember from "../../Pages/beMember/beMember";
import Support from "../../Pages/supportCommunity/supportCommunity";
import Donation from "../../Pages/donation/donation";
import PressRelease from "../../Pages/pressRelease/pressRelease";
import NewsPost from "../../Pages/news post/ResourcePreview";
import BlogPost from "../../Pages/blogPost/ResourcePreview";
import ArticlePost from "../../Pages/articlePost/ResourcePreview";
import OurPartners from "../../Pages/ourPartners/ourPartners";
import ResourcePreview from "../../Pages/ResourcePreview";
import PressPost from "../../Pages/pressPost/ResourcePreview";
import TeamMemberDetail from "../../Pages/ourTeamDetail/ourTeamDetail"
// import Appcss from "./App.css";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer";
import SuperRoute from '../../component/publicRoute/index';
import Editor from '../../component/editor/soleEditor'
import ReactGA from 'react-ga';
const PublicRoutes = () => {
  useEffect(()=>{
//     ReactGA.initialize('UA-209696596-1');
// ReactGA.pageview(window.location.pathname + window.location.search);
   
  },[])  
  return (
    <Switch>

      <Route exact path="/getinvolved/membership" component={Membership} />
      <div>
      {/* <NavigationBar /> */}
          <SuperRoute exact='exact' path="/" component={Home} />
          <SuperRoute exact path="/about" component={About} />
          <SuperRoute exact path="/publication" component={Publication} />
          <SuperRoute exact path="/getInvolved" component={GetInvolved} />
          <SuperRoute path="/supportcommunity" component={SupportCommunity} />
          <SuperRoute exact path="/event" component={Events} />
          <SuperRoute path="/contact-us" component={ContactPage} />
          <SuperRoute path="/dummy" component={DummyPage} />

          <SuperRoute path="/event/news" component={News} />
          <SuperRoute path="/event/news-post/:postId" component={NewsPost} />
          <SuperRoute path="/event/blog-post/:postId" component={BlogPost} />
          <SuperRoute path="/event/article-post/:postId" component={ArticlePost} />
          <SuperRoute path="/event/blogs" component={Blogs} />
          <SuperRoute path="/event/our-articles" component={OurArticles} />

          <SuperRoute path="/about/our-story" component={OurStory} />
          <SuperRoute path="/about/vision-and-mission" component={VisionAndMission} />
          <SuperRoute path="/about/our-team" component={OurTeam} />
          <SuperRoute path="/about/team-member-detail/:memberId" component={TeamMemberDetail} />

          <SuperRoute path="/about/our-gallery" component={OurGallery} />
          <SuperRoute path="/about/our-partners" component={OurPartners} />

          <SuperRoute path="/getinvolved/donate-us" component={DonateUs} />
          <SuperRoute path="/getinvolved/membership" component={Membership} />
          <SuperRoute path="/getInvolved/be-a-member" component={BeMember} />
          <SuperRoute path="/getInvolved/support" component={Support} />
          <SuperRoute path="/getInvolved/donation" component={Donation} />
          
          <SuperRoute path="/publication/our-books" component={Books} />
          <SuperRoute path="/publication/our-resources" component={Resources} />
          <SuperRoute path="/publication/press-release" component={PressRelease} />
          <SuperRoute path="/publication/resource-post/:postId" component={ResourcePreview} />
          <SuperRoute path="/publication/press-post/:postId" component={PressPost} />

          <SuperRoute path="/editor" component={Editor} />


        {/* <ContactUs /> */}
        {/* <Footer /> */}
      </div>
    
    </Switch>
  );
}

export default PublicRoutes;
