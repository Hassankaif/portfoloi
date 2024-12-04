import { createRef } from "react";
import Navigation from "../components/navigation";
const Form=()=>{

    const usernameRef=createRef(null)
    const passwRef=createRef(null)
    const ageRef=createRef(null)
    const Handleform=(e)=>{
        e.preventDefault()
        const username=usernameRef.current.value
        const age =ageRef.current.value
        const passw=passwRef.current.value
        console.log(username,passw, age)

    }

    return <>
    <Navigation/> <br />
    <div>
        <form onSubmit={Handleform}>
            <div> <br />
                <label htmlFor=""> USERNAME    </label> 
                <input type="text" name="USERNAME" required ref={usernameRef} /> <br />
                <br />
            </div>
            <div>
                <label htmlFor=""> PASSWORD    </label>
                <input type="password" name="PASSWORD" required ref={passwRef} /> <br />
                <br />
            </div>
            <div>
                <label htmlFor=""> AGE </label>
                <input type="text" name="AGE" required ref={ageRef} /><br />
                <br />
            </div>
            <button type="submit"> submit </button>
        </form>
    </div>
    </>


}

export default Form;