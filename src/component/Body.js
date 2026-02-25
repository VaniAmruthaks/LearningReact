import { useEffect, useState } from "react";
//import {restaurantList} from "../mockdata/data";
import Card from "./Card";
import {Link} from "react-router-dom";
const Body=()=>{

    const [listofRestrurant,setListofRestrurant]=useState([]);

    const [searchText,setSearchtext]=useState("");

    const displayList=(listofRestrurant || []).filter((restaurant)=>
             restaurant.name?.toLowerCase().includes(searchText.toLowerCase().trim()) ||
             restaurant.cuisine?.toLowerCase().includes(searchText.toLowerCase().trim())
    )

    useEffect(()=>{
        fetchList();
    },[])

    const fetchList=async()=>{
       try{
        const response=await fetch("http://localhost:5000/restaurants");

        const data=await response.json();

        console.log(data);
        console.log("Is array?", Array.isArray(data));

        setListofRestrurant(data)

       }catch(error){
         console.error(error);
       }
    }

    return(
        <div className="body">
            <div className="toprate">
            
            <input 
            type="text"
            value={searchText}
            onChange={(e)=>setSearchtext(e.target.value)}
            />
            </div>
        <div className="Res-container">
        {displayList.map((restraurant)=>(
         <Link key={restraurant.id} to={`/restaruant/${restraurant.id}`}> <Card key={restraurant.id} resData={restraurant}/></Link>
        )
          
        )} 
        </div>
        </div>
       
    )
}

export default Body;