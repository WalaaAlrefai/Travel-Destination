import Header from "../Header/header"
import Footer from "../Footer/footer";
import Tours from "../Tours/tours";
import './home.css'



function Home(props){
    const data=props.data;
    return(
        <section className="sec1">
        <div className="home">
        <Header />
   
       { 
       data.map(element=>{
        return(
        <Tours tourName={element.name} imageUrl={element.image} tourId={element.id} key={element.id}/>
       )})

        }
        
        <Footer />
        </div>
        </section>
    )
}
export default Home;