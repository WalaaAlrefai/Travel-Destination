import Header from "../Header/header"
import Footer from "../Footer/footer";
import Tours from "../Tours/tours";
import './home.css'



function Home(props){
    const data=props.data;
    console.log("data!!!!!1",data)
    return(
        
        <div className="home">
        <Header />
        <Tours data={props.data}/>
        <Footer />
        </div>
      
    )
}
export default Home;