import React, { useEffect, useState } from "react";
import firstimage from "../../assests/firstimage.jpeg";
import secondimage from "../../assests/secondimage.jpeg";
import thirdimage from "../../assests/thirdimage.JPG";
import fourthimg from "../../assests/fourthimg.jpeg";
import fifthimg from "../../assests/fifthimg.jpeg";
import sixthimg from "../../assests/sixthimg.jpeg";
import seventh from "../../assests/video.jpeg";
import { useSelector } from 'react-redux';
import { server } from '../../utils/fetch';
import { List, Card, Image } from 'antd';


import "../../Pages/style.css";

const Photos = () => {
  const photosSection = useSelector(state=>state.aboutStore.photosSection)

  const [initLoading, setInitLoading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [count, setCount]= useState(1)
  const [list, setList]= useState([])
useEffect(()=>{
},[])
console.log(count)
let temp;
const setNewList = ()=>{
  temp = photosSection.slice(0,count)
}
if(photosSection){
  setNewList()

}
  const onLoadMore = () => {
    console.log(count)

    setLoading(true)
    setInitLoading(true)
    setList([])
    setCount((prevValue)=> prevValue+1)
    setNewList()
    setLoading(false)
    setInitLoading(false)
  
    // this.setState({
    //   loading: true,
    //   list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    // });
  }
  const loadMore =
      !initLoading && !loading  && photosSection && count<photosSection.length? (
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
    // grid={{
    //   gutter: 16,
    //   xs: 1,
    //   sm: 1,
    //   md: 2,
    //   lg: 3,
    //   xl: 3,
    //   xxl: 3,
    // }}
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
    dataSource={photosSection? photosSection.slice(0,count) : []}
    renderItem={item => (
      <List.Item style={{margin:"0", padding:"0"}}>
        <div className="row">
                <div className="col-md-6">

      <div className="row">
         
         <div className="col-md-6 gridBox">
           <Image width="100%" height="100%" src={`${server}/${item.image1}`}/></div>
         <div className="col-md-6 gridBox" >
         <Image width="100%" height="100%" src={`${server}/${item.image2}`}/>
         </div>
         <div className="col-md-6 gridBox">
         <Image width="100%" height="100%" src={`${server}/${item.image4}`}/>
         </div>
         <div className="col-md-6 gridBox" >
         <Image width="100%" height="100%" src={`${server}/${item.image5}`}/>
         </div>
         <div className="col-md-12 flatBox">
         <Image width="100%" height="100%" src={`${server}/${item.image6}`}/>
         </div>

       </div>
     </div>

     <div className="col-md-6 massiveBox">
     <Image width="100%" height="100%" src={`${server}/${item.image3}`}/>
     </div>

     <div className="col-md-12 lastBox">
     <Image width="100%" height="100%" src={`${server}/${item.image7}`}/>
     </div>
</div>

      </List.Item>
    )}
  />
             </div>

      {/* <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={firstimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={secondimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={thirdimage}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={fourthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={fifthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={sixthimg}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div> */}
     
    </React.Fragment>
  );
};
export default Photos;
