
import Tour from "./tour/Tour";
import './tours.css';
function Tours(props){

  const tour=props;
  console.log(props.tourId);
 


  return(
    <section className="sec2">
    <div className="card">
         <Tour key={props.tourId} data={tour} />
    </div>
    </section>
  )
}
export default Tours;