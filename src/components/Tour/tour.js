
function Tour(props){
    <>


{
        <div>
         <h2>{props.tourName}</h2>
         <img src={props.imageUrl} alt={props.tourName}/>
         <h3> {props.tourPrice}</h3>
         </div>

        }



</>
}
export default Tour