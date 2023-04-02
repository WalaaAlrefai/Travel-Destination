import Header from "../Header/header"
import Footer from "../Footer/footer";
import Tour  from "../Tour/tour"
// const tourData=require("./data/db.json");




function Home(props){
    return(
        <>
        <Header />
  

       {
            <div style={{"display":"flex" , "flex-direction":"column", "justify-content":"center"}}>
         <h2>{props.tourName}</h2>
         <img style={{"border-radius":"1rem" ,"width":"45%"}} src={props.imageUrl} alt={props.tourName}/>
         <h3> Price : {props.tourPrice}</h3>
         </div>

        }


        <Footer />
        </>
    )
}
export default Home;