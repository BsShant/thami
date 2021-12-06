import React from 'react';
import { Container } from "react-bootstrap";
import publicationResource from "../../assests/publicationResource.jpg";
import airparticles from "../../assests/airparticles.jpg";
import airparticle2 from "../../assests/airparticle2.jpg";
import airpolution from "../../assests/airpolution.jpg";
import gralcier from "../../assests/gralcier.jpg";
import landpolutation from "../../assests/landpolutation.jpg";
import { Link, useHistory } from "react-router-dom";
import GoTOTop from '../goToTop';
import { List, Card } from 'antd';
import { server } from '../../utils/fetch';
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pushResourcesReaderPage } from '../../store/readerStore/readerStore.action';
import draftToHtml from 'draftjs-to-html';


const Resources = ()=>{
  const dispatch = useDispatch()
  const resourcesSection = useSelector(state=>state.publicationStore.resourcesSection)
  const resourcesHeadingSection = useSelector(state=>state.publicationStore.resourcesHeadingSection)
  const resourcesPageHeading = useSelector(state=>state.publicationStore.resourcesPageHeading)

const history = useHistory()
    return(
        <div>
          <div className="resourcesBanner" style={{backgroundImage:`url(${resourcesPageHeading? resourcesPageHeading.image:null})`}}>
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
                                    {resourcesPageHeading? resourcesPageHeading.pageHeading:null}

 {/* We publish lots of resources         */}
 </h2>
 <p style={{color:"white"}}>
     {resourcesPageHeading? resourcesPageHeading.subHeading : null}
</p>

               
              </div>    
              </Container>
              </div> 
              <div className="text-center pt-5" style={{ background: "#f6b745" }}>
        <h3 style={{ marginBottom:"30px" }}>
        {resourcesHeadingSection? resourcesHeadingSection.topTitle : null} 

          {/* Our Resources */}
          </h3>
        <h2 style={{ }}>
        {resourcesHeadingSection? resourcesHeadingSection.heading : null} 

          {/* Enviromental Studies */}
          </h2>
        <p style={{ margin: "-4px 0 50px 0" }}>
        {resourcesHeadingSection? resourcesHeadingSection.detail : null} 

          {/* We are a social unit with commonality such as norms. */}
        </p>
        <div>
          <Container>
            <div className="row mt-5 reversePagination">
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
    pagination={{
      onChange: page => {
        window.scrollTo(0,0);
        console.log(page);
      },
      pageSize: 6,
      position:"bottom"
    }}
    dataSource={resourcesSection? resourcesSection: []}
    renderItem={item => (
      <List.Item >
       <div className="article-margin" style={{marginBotton:"30px", paddingRight:"22px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                    <div className="newsContainerImage" > 
                    <img
                      src={`${server}/${item.image}`}
                    ></img>
                    </div>
                   
                  </div>
                  <div className="col-12 col-sm-6" >
                    <div className="articleExerpt" style={{textAlign:'left'}}>
                    <h3 style={{ fontWeight: "bold", height: "50px",overflow: "hidden",marginBottom: "5px" }} className="headingElipsis">
                      {item.title}
                      {/* Air Particles and Air Quality */}
                    </h3>
                    <p
                      style={{height: "100px",
                        overflow: "hidden"}} className="bookWriter publicationElipsis"
                    >
                      {/* {item.detail} */}{draftToHtml((JSON.parse(item.detail))).replace( /(<([^>]+)>)/ig, '')}                 

                       {/* The air we breath has a lot to do with our health. As we
                      breath in fresh air... */}
                    </p>
                    
                      <button
                        onClick={()=>{
                          dispatch(pushResourcesReaderPage(item.id))
                          return history.push(`/publication/resource-post/${item.id}/${item.title.split(" ").join('-')}`)}
                          } 
                        className="newsButton"

                      >
                        {item.buttonName}
                        {/* Learn More */}
                      </button>
                    </div>
                   
                  </div>
                </div>
              </div>
      </List.Item>
    )}
  />
              {/* <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                    <div className="newsContainerImage"> <img
                      src={publicationResource}
                    ></img>
                    </div>
                   
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                      <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                  <div className="newsContainerImage"> <img
                      src={airparticles}
                    ></img>
                    </div>
                    
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                   
                    <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                  <div className="newsContainerImage"> <img
                      src={airparticle2}
                    ></img>
                    </div>
                    
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                   
                    <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                  <div className="newsContainerImage">  <img
                      src={airpolution}
                    ></img>
                    </div>
                   
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt">
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                       
                    </p>
                    
                    <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                    <div className="newsContainerImage"> <img
                      src={gralcier}
                    ></img>
                    </div>
                    
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                    <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6 newsContainerBox">
                  <div className="newsContainerImage"> <img
                      src={landpolutation}
                      style={{  }}
                    ></img>
                    </div>
                    
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                    <button
                        onClick={()=>history.push("/resourcepreview")}
                        className="newsButton"

                      >
                        Learn More
                      </button>
                  </div>
                </div>
              </div> */}
              
            </div>
            {/* <div className="d-flex justify-content-center mt-5">
              <MDBRow>
                <MDBCol>
                  <MDBPagination className="mb-5">
                    <MDBPageItem disabled>
                      <MDBPageNav
                        aria-label="Previous"
                        className="ml-2 mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Previous</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        1 <span className="sr-only ">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className="ml-2 mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        2
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className=" mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        3
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav
                        aria-label="Previous"
                        className=" mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Next</span>
                      </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>
                </MDBCol>
              </MDBRow> */}
              {/* <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination> */}
            {/* </div> */}
          </Container>
        </div>
      </div>
      <GoTOTop />
              </div>
    )}

    export default Resources;