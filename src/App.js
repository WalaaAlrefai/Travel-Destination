import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/home"
const tourData=require("./data/db.json");

function App() {
  console.log(tourData);
  return (
  <>
  <Home data={tourData}/>

  </ > 
  )
}

export default App;
