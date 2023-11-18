import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, } from "react-router-dom";

import { Root, rootLoader, } from "./routes/root";
import { Index, } from "./routes/index";
import { ErrorPage, } from "./routes/error";
import { PageOne, categoryLoader, } from "./routes/page-one";
import { PageTwo, singleLoader, } from "./routes/page-two"
import "./index.css"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />} loader={rootLoader} >
      <Route errorElement={<ErrorPage />} >
        <Route index element={<Index />} />
        <Route path={":category"} element={<PageOne />} loader={categoryLoader} />
        <Route path={":category/:id/"} element={<PageTwo />} loader={singleLoader} />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.querySelector(".one")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



// const renameProp = (oldProp, newProp, { [oldProp]: old }) =>
//   ({ [newProp]: old })