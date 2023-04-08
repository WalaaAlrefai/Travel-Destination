import { useParams } from "react-router";
import { useState } from "react";
const data= require('../../data/db.json')

function TourDetails(){
    let {id}=useParams();
    
    console.log("the data is",data,"the id",id)
    const [readMore,setReadMore]=useState('false')
    return (<>
    {
        data.map(element=>{
            if(element.id===id){
                return(
                    <div>
                        <h2>{element.name}</h2>
                        <img src={element.image} alt={element.name}/>
                        <p>{element.price}</p>
                        <div>
                            {
                              readMore?<>
                              <p>{element.info}</p>
                              <button onClick={()=>setReadMore(false)}>show Less</button>
                              </>
                              :
                              <>
                              <p>{(element.info).substring(0,200)}</p>
                              <button onClick={()=>setReadMore(true)}>show More</button>
                              </>

                            }
                        </div>
                    </div>
                )
            }
        })
    
        
    }
    </>)
}
export default TourDetails