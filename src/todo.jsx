import {useState } from "react";
import "./components/Card.css";
import Todoform from "./to do list/todoform";
import Todocard from "./Todocard";

const Todo=()=>{
    const [cards, setcards]=useState([])

    const Cardgenerator=(work1,desc1,date1)=>{
        const newobject = { work:`${work1}`, desc:`${desc1}`, date:`${date1}` }
          setcards([...cards, newobject]);
        }

    return<>
        <Todoform Cardgenerator={Cardgenerator}/>  

        <div className="container">
            {/* <button onClick={cardgenerator}> GENERATE CARD </button> */}
            <div className="card">
                {cards.map((card,indx)=>{
                    return <>
                    <Todocard key={indx} work={card.work} desc={card.desc} date={card.date} />
                    </>
                })}
            </div>
        </div>  
    </>
}
export default Todo;