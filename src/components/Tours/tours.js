
import { Link } from "react-router-dom";
import Tour from "./tour/Tour";
import './tours.css';
function Tours(props){
  const tour=props.data;
  console.log("checking data",tour)
  // console.log(props.tourId);
 


  return(<>
  
    { 
      tour.map(element=>{
        return(
        <div key={element.id} className="card">
         <Link to={`/city/${element.id}`} className="link">
           <Tour tourName={element.name} imageUrl={element.image}/>
         </Link>
        </div>
        )})

    }
</>
   
  )
}
export default Tours;