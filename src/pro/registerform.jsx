import React from "react";

function Register(){

    function handleRegistration(event){
        // event.preventDefault();
        console.log("REGISTERED SUCCESSFULLY !!!!!!!!!!");
    }

    return <>
            <form >
                <div>
                    <input type="text" id='name' placeholder="ENTER NAME: " /> <br />
                    <input type="number" id='num' placeholder="MOBILE NO :"/> <br />
                    {/* <input type="email" placeholder="ENTER EMAIL:" /> <br />
                    <input type="password" placeholder="ENTER PASSWORD" /> <br /> */}
                    <button onClick={handleRegistration}>Submit</button> <br />
                </div>
            </form>
        </>
    

}
export default Register;