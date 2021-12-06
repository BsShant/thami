import React,{useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBiking, faBars, faBookmark, faScroll, faPlay } from '@fortawesome/free-solid-svg-icons';
import video from "../../assests/video.jpeg";
import firstimage from "../../assests/firstimage.jpeg";
import secondimage from "../../assests/secondimage.jpeg";
import thirdimage from "../../assests/thirdimage.JPG";
import fourthimg from "../../assests/fourthimg.jpeg";
import fifthimg from "../../assests/fifthimg.jpeg";
import sixthimg from "../../assests/sixthimg.jpeg";
import "../../Pages/style.css";
import { Player, ControlBar, PosterImage,LoadingSpinner, BigPlayButton} from 'video-react';
import VideoPlayer from 'react-video-js-player';
// import ReactPlayer from 'react-player'
import { List, Card, Image } from 'antd';
import { useSelector } from 'react-redux';
import { server } from '../../utils/fetch';

const Video = () => {
  const videosSection = useSelector(state=>state.aboutStore.videosSection)
let temp;
  const [initLoading, setInitLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount]= useState(6)
  const [list, setList]= useState([])
  useEffect(()=>{
  },[])
  console.log(count)
  const setNewList = ()=>{
    temp = videosSection.slice(0,count)
  }
  if(videosSection){
    setNewList()
  
  }
    const onLoadMore = () => {
      console.log(count)
  
      setLoading(true)
      setInitLoading(true)
      setList([])
      setCount((prevValue)=> prevValue+6)
      setNewList()
      setLoading(false)
      setInitLoading(false)
    
      // this.setState({
      //   loading: true,
      //   list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
      // });
    }
    const loadMore =
        !initLoading && !loading  && videosSection && count<videosSection.length? (
          <div
            style={{
              textAlign: 'center',
              marginTop: 12,
              height: 32,
              lineHeight: '32px',
            }}
          >
            <button onClick={()=>onLoadMore()} className="buttonNormal" style={{
               
            }}>load more</button>
          </div>
        ) : null;
  return (
    <React.Fragment>
      <div className="row" style={{marginBottom:"50px"}}>
      <List
                          style={{width:"100%"}}
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 3,
      xxl: 3,
    }}
    // pagination={{
    //   onChange: page => {
    //     window.scrollTo(0,0);
    //     console.log(page);
    //   },
    //   pageSize: 1,
    //   position:"bottom"
    // }}
    itemLayout="horizontal"
    loading={initLoading}
    loadMore={loadMore}
    dataSource={videosSection? videosSection.slice(0,count) : []}
    renderItem={item => (
      <List.Item style={{margin:"0", padding:"0"}}>
        <div style={{width:"100%",  marginBottom:"70px"}}>
                <Player 
                poster={`${server}/${item.image}`}
                src={`${server}/${item.video}`}
                style={{height:"202px", overflow:"hidden"}}
                className="videoBox"
                >
                        <BigPlayButton position="center" />
                  {/* <PosterImage /> */}
                <ControlBar />
                <LoadingSpinner />
               </Player>
               <div className="videoDetail" style={{backgroundColor:"#f6b745",height:"155px", padding: "10px 15px",overflow: "hidden"}}>
                 <h3 className="videoHeadingElipsis"style={{paddingBottom:"2px"}}>{item.title}</h3>
                 <p className="videoDetailElipsis">{item.detail}</p>
               </div>

      </div>

      </List.Item>
    )}
  />
     
                 
        {/* <div className="col-md-6">
      
          <div className="row">
            <div className="col-md-6 gridBox show"> */}
            {/* <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div> */}
      {/* </div>
            <div className="col-md-6 gridBox show" style={{background:`url(${fourthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-6 gridBox show" style={{background:`url(${fifthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-6 gridBox show" style={{background:`url(${sixthimg})`}}>
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>
            <div className="col-md-12 flatBox show">
            <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
            <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
            </div>

          </div>
        </div>
        <div className="col-md-6 massiveBox show">
        <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
        <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
        </div>
        <div className="col-md-12 lastBox show">
          <div className="videoDescription">
            <h3>Cultural program</h3>
            <p>This video contains our culture.</p>
          </div>
        <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "20px",
width: "20px"}} />          </div>
        </div>
        <div className="col-12"> */}
        {/* <VideoPlayer
                    // controls={true}
                    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                    // poster={thirdimage}
                    width="720"
                    height="420"
                   
                /> */}
               
        {/* </div> */}

      </div>
      {/* <div className="row d-flex justify-content-center">
        <button
          style={{
            background: "#f6b745",
            border: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "bold",
          }}
        >
          See more
        </button>
      </div> */}
      {/* <div className="row" style={{display:"flex", justifyContent:"center"}}>
        <div className="card p-2 shadow-lg" style={{ width: "22rem", position:"relative" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center"}}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem",display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card p-2 ml-2 shadow-lg" style={{ width: "22rem", display:"flex", justifyContent:"center" }}>
          <img src={video} />
          <div className="videoButton">
          <FontAwesomeIcon icon={faPlay} style={{color: "white",
marginleft: "6px",
height: "40px",
width: "50px"}} />          </div>
          <div className="card-body" style={{ padding: "0rem" }}>
            <div className="col-12">
              <div className="row pt-3">
                <div className="col-2 ">
                  <h5
                    style={{
                      width: "2rem",
                      background: "#f6b745",
                      textAlign: "center",
                    }}
                  >
                    <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                    <br />
                  </h5>
                </div>
                <div className="col-10 d-flex justify-content-start">
                  <h4 style={{}}>
                    World runs out of time{" "}
                    <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                      proin in nisi pretium, ultrices <br /> massa non,
                      sollicitudin urna.
                      <br />
                      phasellus rutrum luctus...
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <button
          style={{
            background: "#f6b745",
            border: "none",
            paddingLeft: "25px",
            paddingRight: "25px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          See more
        </button>
      </div> */}
    </React.Fragment>
  );
};
export default Video;
