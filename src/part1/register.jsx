import Data from "./datadb";

import React  from "react";


function Register() {
let age =45;
    function handleregister(event){
        event.preventDefault();
        console.log("registered!!!!!!!!!!!!!!!");
    }
    return <>
    <form>
        {
        age >20 ? (
            <div>
                <input type="email" placeholder="enter email"/>
                <button onClick={handleregister} > Submit</button>
            </div>
        ): (
                <h1> NOT ELIGIBLE </h1>
            )
        }
    </form>

    </>
}

export default Register;