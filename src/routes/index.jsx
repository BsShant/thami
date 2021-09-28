import React from 'react';
import PublicRoutes from './publicRoutes/publicRoutes';
import ProtectedRoutes from './protectedRoutes/protectedRoutes';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

const IndexRouter = ()=>{
    return(
<div>
<BrowserRouter>
    <PublicRoutes />
    <ProtectedRoutes />
    </BrowserRouter>
</div>
    )
}

export default IndexRouter;