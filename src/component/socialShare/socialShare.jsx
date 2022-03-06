import React from "react";
import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";
import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  ViberShareButton,
  ViberIcon,
} from "react-share";
import './style.css'
const SocialShare = (props) => {
    const {title, location} = props
    console.log("https://nepalthamisociety.org" + location.pathname)
  return (
    <div>
      <FacebookShareButton
        style={{ marginRight: "5px" }}
        className="socialMediaShare"
        url={"https://nepalthamisociety.org" + location.pathname}
        // quote={"CampersTribe - World is yours to explore"}
        // hashtag="#camperstribe"
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton
        style={{ marginRight: "5px" }}
        className="socialMediaShare"

        url={"https://nepalthamisociety.org" + location.pathname}
        title={title ? title : null}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <ViberShareButton
        // style={{ marginRight: "5px" }}
        className="socialMediaShare"

        url={"https://nepalthamisociety.org" + location.pathname}

        title={title ? title : null}
      >
        <ViberIcon size={40} round={true} />
      </ViberShareButton>
    </div>
  );
};
export default SocialShare;
