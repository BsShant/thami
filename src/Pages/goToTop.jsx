
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import React,{useEffect} from "react";

export default function GoTOTop(){

const routePath = useLocation()
  const scrollTop=()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});

  }
  useEffect(()=>{
    scrollTop()
  },[routePath])
    return null;
}