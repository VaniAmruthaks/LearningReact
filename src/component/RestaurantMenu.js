import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import { MENU_URL } from "../utilities/constant";

const RestaurantMenu=()=>{
    const {id}=useParams();
    const[resMenu,setresMenu]=useState(null);
     const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchMenu();
    },[id])
    
    const fetchMenu=async()=>{
        try{
           const data=await fetch(MENU_URL + id);

           const json=await data.json();

           console.log(json);

           setresMenu(json);

           setLoading(false);

        }catch(error){
           console.error(error)
        }

    }

    if (loading) return <div>Loading...</div>;

  if (!resMenu) return <div>Failed to load restaurant data</div>;

    return <div>

        <h1>{resMenu.name}</h1>
        <h2>Menu</h2>
        {resMenu.menu?.map((item,index)=>(
           <li key={index}>{item.name}</li>
        ))
        }
        <h3></h3>

    </div>
}
export default RestaurantMenu;