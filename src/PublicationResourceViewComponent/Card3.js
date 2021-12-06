import React from "react";
import { Container } from "react-bootstrap";
import publicationcard3 from "../assests/publicationcard3.jpg";
import { useSelector } from 'react-redux';
import Editor from "../component/editor/editor"
import { EditorState,convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';
const Card3 = (props) => {
  const {postName, postId} = props.match.params

  const resourcesData= useSelector(state=>state.readerStore.resourcesData)
  const resourcesSection = useSelector(state=>state.publicationStore.resourcesSection)
  // const [editorState, setEditorState] = React.useState(
  //   resourcesData? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(resourcesData.detail))): () => EditorState.createEmpty()
  //  )
  return (
    <React.Fragment>
       <div className="text-center articleBox">
        <Container>
          <h1 style={{ fontWeight: "bold" }}>
            {/* Air Pollution in news today */} 
            {resourcesSection && resourcesSection.filter(item => item.id.toString() === postId.toString())[0]? resourcesSection.filter(item=> item.id.toString() === postId.toString())[0].title : null}

            </h1>
            {resourcesSection && resourcesSection.filter(item => item.id.toString() === postId.toString())[0]?<Editor editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(resourcesSection.filter(item=> item.id.toString() === postId.toString())[0].detail)))} toolbarClassName='hideToolbar' readOnly/>:null}

          {/* <p
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "25px" }}
          >
            {resourcesData? resourcesData.detail : null} */}
            {/* Particulate matter contains microscopic solids or liquid droplets
            that are so small that they can be inhaled and cause serious health
            problems. Some particles less than 10 micrometers in diameter can
            get deep into your lungs and some may even get into your
            bloodstream. Of these, particles less than 2.5 micrometers in
            diameter, also known as fine particles or PM2.5, pose the greatest
            risk to health. */}
          {/* </p> */}
          {/* <p
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "25px" }}
          >
            Fine particles are also the main cause of reduced visibility (haze)
            in parts of the United States, including many of our treasured
            national parks and wilderness areas.
          </p>
          <p
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "25px" }}
          >
            PM stands for particulate matter (also called particle pollution):
            the term for a mixture of solid particles and liquid droplets found
            in the air. Some particles, such as dust, dirt, soot, or smoke, are
            large or dark enough to be seen with the naked eye. Others are so
            small they can only be detected using an electron microscope.
          </p>
          <h3 style={{ marginTop: "25px" }}>Particle Polution Include</h3>
          <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-3"></div>
            <div className="col-6">
              <img src={publicationcard3} style={{ width: "100%" }}></img>
            </div>
            <div className="col-3"></div>
          </div>
        </Container>
        <Container>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "25px",
              marginBottom: "55px",
            }}
          >
            PM10 : inhalable particles, with diameters that are generally 10
            micrometers and smaller; and <br /> PM2.5 : fine inhalable
            particles, with diameters that are generally 2.5 micrometers and
            smaller.
            <br /> How small is 2.5 micrometers? Think about a single hair from
            your head. The average human hair is about 70 micrometers in
            diameter – making it 30 times larger than the largest fine particle.
          </p> */}
        </Container>
      </div>
    </React.Fragment>
  );
};
export default Card3;
