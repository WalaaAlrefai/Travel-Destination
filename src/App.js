import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/home"
import TourDetails from "./components/TourDetails/TourDetails"
const tourData=require("./data/db.json");

function App() {
  console.log(tourData);
  return (
  <div className="app">
  <Home data={tourData}/>
  <Routes>
    <Route path="/" element={<Home data={tourData}/>}> </Route>
    <Route path="/city/:id" element={<TourDetails/>}></Route>
  </Routes>

  </div > 
  )
}

export default App;
