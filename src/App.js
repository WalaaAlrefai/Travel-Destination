import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home"
import NavBar from "./components/Navbar/Navbar";
import TourDetails from "./components/TourDetails/TourDetails"
const tourData=require("./data/db.json");

function App() {
  
  return (
   <div className='App'>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home data={tourData}/>}> </Route>
    <Route path="/city/:id" element={<TourDetails/>}></Route>
  </Routes>

  </div> 
  )
}

export default App;
