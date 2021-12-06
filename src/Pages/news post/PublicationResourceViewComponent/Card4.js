import React,{useLayoutEffect} from "react";
import aboutcard5 from "../../../assests/news2.jpg";
import { Container } from "react-bootstrap";
import { List, Card } from 'antd';
import { useSelector } from 'react-redux';
import {server} from '../../../utils/fetch';
import { useDispatch } from 'react-redux';
import { pushNewsReaderPage } from '../../../store/readerStore/readerStore.action';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Editor from "../../../component/editor/editor"
import { EditorState,convertToRaw, convertFromRaw } from "draft-js";
import draftToHtml from 'draftjs-to-html';

const Card4 = (props) => {
  const {postName, postId} = props.match.params

  // /${item.title.split(' ').join('-')}
  const dispatch = useDispatch()
  const history = useHistory()
  const newsSection= useSelector(state=>state.eventStore.newsSection)
  const newsData= useSelector(state=>state.readerStore.newsData)
//   const [editorState, setEditorState] = React.useState(
//     newsData? ()=>EditorState.createWithContent(convertFromRaw(JSON.parse(newsData.detail))): () => EditorState.createEmpty()
//    )
//    useLayoutEffect(() => {
//     return () => {
//         setEditorState(()=>EditorState.createEmpty())
//     }
// }, [])
   
  return (
    <React.Fragment>
      <div className="text-center" style={{margin:"120px 0 50px"}}>
        <h2>Recent News</h2>
      </div>
      <div>
      <Container>
            <div className="row" style={{marginBottom:"120px"}}>
            <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
      xl: 4,
      xxl: 4,
    }}
    // pagination={{
    //   onChange: page => {
    //     window.scrollTo(0,0);
    //     console.log(page);
    //   },
    //   pageSize: 9,
    //   position:"bottom"
    // }}
    dataSource={newsSection? newsSection.filter(data=> data.id.toString()!== postId.toString()).slice(0,4): []}
    renderItem={item => (
      <List.Item>
        <div className="p-4">
        
                        <div style={{backgroundImage:`url(${server}/${item.image})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'200px'}}>

              </div>
                {/* <img src={`${server}/${item.image}`} style={{ width: "100%", height:"250px"  }}></img> */}
                <div style={{overflow: "hidden", marginBottom:"20px", height:"170px"}}>
                <h3 className="mt-3 headingElipsis" style={{overflow: "hidden",marginBottom: "10px", paddingBottom:"2px"}}> 
                {item.title}
                                     {/* Air Particles and Air Quality */}
</h3>
                <p style={{  marginBottom:"20px",marginTop:"0px", textOverflow: "ellipsis",overflow: "hidden"}} className="contentElipsis">
                  {/* {item.detail} */}{draftToHtml((JSON.parse(item.detail))).replace( /(<([^>]+)>)/ig, '')}
                {/* The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                */}
                       </p>
                       </div>
                       <button onClick={()=>{
                          // setEditorState(()=>EditorState.createEmpty())
                          // dispatch(pushNewsReaderPage(null))
                          dispatch(pushNewsReaderPage(item.id))
                          return history.push(`/event/news-post/${item.id}/${item.title.split(" ").join('-')}`)}
                          } style={{marginTop:"-10px"}}  className="buttonNormal">
                          {/* Read More */}{item.buttonName}
                          </button>
              </div>
      </List.Item>
    )}
  />
              
              {/* <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                       </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div> */}
            </div>
          </Container>
      </div>
    </React.Fragment>
  );
};
export default Card4;
