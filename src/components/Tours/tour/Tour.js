function Tour(props){
    let tour=props.data;
  
return(
<>
<h2>  {tour.tourName} </h2>
<img src={tour.imageUrl} alt={tour.tourName}/>
</>

);
}

export default Tour;