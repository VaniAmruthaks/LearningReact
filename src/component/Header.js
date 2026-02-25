import { useState } from "react";
import {IMG_LOGO} from "../utilities/constant";
import { Link } from "react-router-dom";
const Header=()=>{
    const [btnName,setbtnName]=useState("Login")

   return (<div className="header">
     <div className="logoimg">
     <img className="logoimg" alt="logo" src={IMG_LOGO} />
     </div>
     <div className="nav-items">
     <ul >
       
            <li><Link to="/">Home</Link></li>
            <li>
            <Link to="/about">About us</Link>
            </li>
            <li>
            <Link to="/contact">Contact us</Link>
            </li>
            <button
            onClick={()=>{

                btnName === "Login" 
                ? setbtnName("Logout")
                :setbtnName("Login");
            }}
            >{btnName}</button>   
     </ul>
     </div>
    </div>)
}

export default Header;