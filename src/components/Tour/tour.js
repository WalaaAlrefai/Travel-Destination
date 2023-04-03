
function Tour(props){

  return(
    <div style={{"backgroundColor":"gold" , "width":"100%" , "textAlign":"center"}}>
         
         <h2>  {props.tourName} </h2>
         <img style={{"width":"50%" , "border-radius":"2rem"}} src={props.imageUrl} alt={props.tourName}/>
        
        
    </div>
  )
}
export default Tour;