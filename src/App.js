import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React,{useEffect} from "react";
import IndexRoute from './routes/index';
// import Appcss from "./App.css";

function App() {
  
  return (
    <React.Fragment>
      
     <IndexRoute />
    </React.Fragment>
  );
}

export default App;
