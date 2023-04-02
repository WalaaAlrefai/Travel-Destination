import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/home"
const tourData=require("./data/db.json");

function App() {
  console.log(tourData);
  return (
  <>
  {/* <Home /> */}
  {
    tourData.map(element=>{
      return(
      <Home tourName={element.name} imageUrl={element.image} tourPrice={element.price}/>
      );
    })

  }

  </ > 
  )
}

export default App;
