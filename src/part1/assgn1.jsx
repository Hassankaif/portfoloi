import React from "react";

const UserCard=(props) =>{

    return <>
        <h1> user name is {props.name} </h1>
        <h2> user no is {props.num} </h2>
    </>
}

export default UserCard;