//import {IMG_CDN_URL} from "../utilities/constant";
const Card=(props)=>{
    const {resData}=props;
    console.log("Rendering Card:", resData);
    const {
       name,
       cuisine,
       rating,
       deliveryTime,

    }=resData;
    
    return(
       
        <div className="res-card">
            
         <h4>{name}</h4>
         <h3>{cuisine}</h3>
         <h3>{rating}</h3>
        <p>{deliveryTime}</p>
        </div>
    

    )
}

export default Card;