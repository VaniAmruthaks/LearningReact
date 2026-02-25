import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import Header from "../src/component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RestaurantMenu from "./component/RestaurantMenu";
import Error from "./component/Error";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";


 const AppLayout=()=>{
    return(<div>
         <Header/>
        <Outlet/>
    </div>)
    
 }

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
         {
      path:"/",
      element:<Body/>,
   }
        , {
      path:"/about",
      element:<About/>,
   },
   {
      path:"/contact",
      element:<Contact/>,
   },
   {
      path:"/restaruant/:id",
      element:<RestaurantMenu/>,
   }
      ]
   }
   
   

])

 const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(<RouterProvider router={appRouter}/>);
 