import './Card.css'
import React, { useState }  from "react";

function Child({parentfunction}){
    const [childdata, setchilddata]= useState('')

    const senddata=()=>{
        parentfunction(childdata);
    }
    return<>
        <div>
            <h2>child data is ...</h2>
            {childdata}
            <br />
            <input type="text" placeholder="enter child data" value={childdata} onChange={(e)=>setchilddata(e.target.value)}/>
             
             <br />
             <button onClick={senddata}> SEND DATA TO PARENT </button>
        </div>
    </>
}

export default Child;