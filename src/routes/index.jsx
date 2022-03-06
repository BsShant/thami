import React from "react";
import PublicRoutes from "./publicRoutes/publicRoutes";
import ProtectedRoutes from "./protectedRoutes/protectedRoutes";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import TransitionComponent from "../component/transition-component/transition-component";
import HelmetMetaData from "../component/helmet/helmet";
const IndexRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <HelmetMetaData />
        <PublicRoutes />
        <ProtectedRoutes />
      </BrowserRouter>
    </div>
  );
};
// export default IndexRouter;
export default TransitionComponent(IndexRouter);
