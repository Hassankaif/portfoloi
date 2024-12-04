import "./Card.css"
import React from "react";

const Card=({id,title,num})=>{

    return(
            <div className="card">
                <h1> {title} </h1>
                <p> num of apple is {num} </p>
            </div>
        )
}

export default Card;